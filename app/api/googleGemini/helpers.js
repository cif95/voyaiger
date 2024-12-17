import { SchemaType } from "@google/generative-ai";

export const itinerarySchema = {
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
					timeZone: {
						type: SchemaType.STRING,
						description: "The IANA time zone identifier for the city, e.g., 'Australia/Sydney'",
						nullable: false,
					},
					duration: {
						type: SchemaType.STRING,
						description: "Duration in days of the stay at each stop",
						nullable: false,
					},
					description: {
						type: SchemaType.STRING,
						description: "medium long description of the city",
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
									description: "Long Description of the attraction",
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