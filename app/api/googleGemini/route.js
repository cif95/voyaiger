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
			model: "models/gemini-1.5-flash",
			systemInstruction: `
				Generate a travel itinerary considering this user filters:
					{ 
						peopleCount: string, => this can be "soloTraveler", "couple", "smallGroup" or "group"
						continent: string, => this can be "europe", "northAmerica", "southAmerica", "centralAmerica", "asia", "oceania"
						travelDuration: string, => this can be "oneWeekend", "oneWeek", "twoWeeks", "threeWeeks", "oneMonth"
						activities: array of strings => this can be "nature", "beach", "mountains", "artAndCulture", "nightlife"
					}
				The itinerary should be tailored to suggest the best travel for the given filters, providing rich descriptions about each stop.
				It can suggest more stops but each stop cannot be more then 2 hours away with public transport and all stops must be different from each others.
				Each stop must be in the same continent as the provided filter.
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
		return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
	}
}