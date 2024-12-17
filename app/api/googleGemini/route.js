import { GoogleGenerativeAI } from "@google/generative-ai";
import { itinerarySchema } from "./helpers";

const API_KEY = process.env.GOOGLE_AI_API_kEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req) {

	try {
		const body = await req.json();
		const { prompt } = body;

		if (!prompt) {
			throw new Error("missing prompt field!");
		}

		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash-8b",
			systemInstruction: `
				Generate a travel itinerary considering this user filters:
					{ 
						peopleCount: string, => number of people
						continent: string, => continent of travel itinerary, all stops must belong to this
						travelDuration: string, => duration of the travel, can be "oneWeekend", "oneWeek", "twoWeeks", "threeWeeks", "oneMonth"
						activities: array of strings => focus of travel, this can be "nature", "beach", "mountains", "artAndCulture" or "nightlife"
					}
				The itinerary should be tailored to suggest the best travel for the given filters, providing rich descriptions about each stop.
				Il the user has not selected any focus activities, generate it considering the most popular cities.
				The itinerary can have more stops but each stop cannot be more then 2 hours away with public transport.
				All stops must be different from each other and each stop must be in the same continent as the provided filter.
				Duration in days of each stop is proportioned to the amount of attractions that the place offers.
				Output the itinerary in JSON following the provided schema.
			`,
			generationConfig: {
				responseMimeType: "application/json",
				responseSchema: itinerarySchema,
				temperature: 0
			},
		});

		const result = await model.generateContent(prompt);
		const data = await result.response.text();

		return new Response(
			data, { 
				status: 200,
				headers: {"Content-Type": "application/json"}
			}	
		);
	} catch (error) {
		throw new Error(error);
	}
}

// This enables the function to run in the background for up to 15 minutes
export const config = {
	type: "experimental-background"
};