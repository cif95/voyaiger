import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_AI_API_kEY;
const genAI = new GoogleGenerativeAI(API_KEY);
import { itinerarySchema } from "./helpers";

export async function POST(req) {

	try {
		const body = await req.json();
		const { prompt } = body;

		if (!prompt) {
			throw new Error("missing prompt field!");
		}

		const model = genAI.getGenerativeModel({
			model: "models/gemini-1.5-pro",
			systemInstruction: `
				Generate a travel itinerary considering this user filters:
					{ 
						peopleCount: string, => this can be "soloTraveler", "couple", "smallGroup" or "group"
						continent: string, => this can be "europe", "northAmerica", "southAmerica", "centralAmerica", "asia", "oceania"
						travelDuration: string, => this can be "oneWeekend", "oneWeek" or "twoWeeks"
						activities: array of strings => this can be "nature", "beach", "mountains", "artAndCulture"
					}
				The itinerary should be tailored to suggest the best travel for the given filters, providing rich descriptions about each stop.
				It can suggest more stops but each stop cannot be more then 2 hours away with public transport.
				Output the itinerary in JSON following the provided schema.
			`,
			generationConfig: {
				responseMimeType: "application/json",
				responseSchema: itinerarySchema,
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