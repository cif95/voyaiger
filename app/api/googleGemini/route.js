import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_AI_API_kEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req) {

	try {
		const body = await req.json();
		const { prompt } = body;

		if (!prompt) {
			throw new Error("missing prompt field!");
		}

		const schema = {
			description: "Travel Itinerary schema",
			type: SchemaType.OBJECT,
			properties: {
				itineraryName: {
					type: SchemaType.STRING,
					description: "A captivating title to be displayed",
					nullable: false,
				},
				summary: {
					type: SchemaType.STRING,
					description: "A brief summary of the whole itinerary",
					nullable: false,
				},
				notes: {
					type: SchemaType.STRING,
					description: "Travel tips and recommendations for the itinerary",
					nullable: false,
				},
				cultureInformation: {
					type: SchemaType.STRING,
					description: "Information and curiosity about the culture of the place",
					nullable: true,
				},
				bestPeriod: {
					type: SchemaType.STRING,
					description: "Best period to visit considering the selected activities",
					nullable: true,
				},
				stops: {
					type: SchemaType.ARRAY,
					description: "List of stops (cities) in the itinerary",
					items: {
						type: SchemaType.OBJECT,
						properties: {
							city: {
								type: SchemaType.STRING,
								description: "Name and State of the city",
								nullable: false,
							},
							coordinates: {
								type: SchemaType.OBJECT,
								properties: {
									latitude: {
										type: SchemaType.NUMBER,
										description: "Latitude of the city",
										nullable: false,
									},
									longitude: {
										type: SchemaType.NUMBER,
										description: "Longitude of the city",
										nullable: false,
									},
								},
								nullable: false,
							},
							duration: {
								type: SchemaType.STRING,
								description: "Duration in days of the stay at each stop",
								nullable: false,
							},
							description: {
								type: SchemaType.STRING,
								description: "Brief description of the city",
								nullable: true,
							},
							attractions: {
								type: SchemaType.ARRAY,
								description: "List of attractions in the city",
								items: {
									type: SchemaType.OBJECT,
									properties: {
										name: {
											type: SchemaType.STRING,
											description: "Name of the attraction",
											nullable: false,
										},
										description: {
											type: SchemaType.STRING,
											description: "Description of the attraction",
											nullable: false,
										},
										coordinates: {
											type: SchemaType.OBJECT,
											properties: {
												latitude: {
													type: SchemaType.NUMBER,
													description: "Latitude of the attraction",
													nullable: false,
												},
												longitude: {
													type: SchemaType.NUMBER,
													description: "Longitude of the attraction",
													nullable: false,
												},
											},
											nullable: false,
										},
									},
									required: ["name", "description", "coordinates"],
								},
							},
						},
						required: ["city", "coordinates", "duration", "attractions"],
					},
				},
			},
			required: ["itineraryName", "summary", "stops"], // Add required fields here
		};

		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction: `
				Generate a travel itinerary considering this user filters:
					{ 
						peopleCount: string, => this can be "soloTraveler", "couple", "smallGroup" or "group"
						continent: string, => this can be "europe", "northAmerica", "southAmerica", "centralAmerica", "asia", "oceania"
						travelDuration: string, => this can be "oneWeekend", "oneWeek" or "twoWeeks"
						activities: array of strings => this can be "nature", "beach", "mountains", "artAndCulture"
					}
				The itinerary should be tailored to suggest the best travel for the given filters.
				It can suggest more stops but each stop cannot be more then 2 hours away with public transport.
				Output the itinerary in JSON following the provided schema.
			`,
			generationConfig: {
				responseMimeType: "application/json",
				responseSchema: schema,
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