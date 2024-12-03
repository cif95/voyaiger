import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAIServices } from "services/GoogleAI";

const mockItinerary = {
	"itineraryName": "Two Weeks of Nature and Beach in South Africa",
	"stops": [
		{
			"attractions": [
				{
					"coordinates": {
						"latitude": -33.9249,
						"longitude": 18.4241
					},
					"description": "Iconic landmark, offers stunning views and diverse flora and fauna.",
					"name": "Table Mountain"
				},
				{
					"coordinates": {
						"latitude": -33.9167,
						"longitude": 18.4167
					},
					"description": "Picturesque beach with calm waters, perfect for swimming and relaxation.",
					"name": "Camps Bay Beach"
				}
			],
			"city": "Cape Town",
			"coordinates": {
				"latitude": -33.9249,
				"longitude": 18.4241
			},
			"duration": "4 days",
			"description": "Cape Town offers a vibrant city life along with stunning natural landscapes and beaches."
		},
		{
			"attractions": [
				{
					"coordinates": {
						"latitude": -34.0,
						"longitude": 20.0
					},
					"description": "The park is home to a diverse range of wildlife including elephants, lions, rhinos, leopards, and buffalos.",
					"name": "Garden Route National Park"
				},
				{
					"coordinates": {
						"latitude": -33.9533,
						"longitude": 22.45
					},
					"description": "Beautiful beaches along the Garden Route.",
					"name": "Plettenberg Bay"
				}
			],
			"city": "Garden Route",
			"coordinates": {
				"latitude": -34.0,
				"longitude": 20.0
			},
			"duration": "5 days",
			"description": "A scenic route along the coast, known for its stunning beaches and lush forests."
		},
		{
			"attractions": [
				{
					"coordinates": {
						"latitude": -29.0167,
						"longitude": 31.0167
					},
					"description": "Wildlife reserve famous for its large population of elephants and other wildlife.",
					"name": "Addo Elephant National Park"
				},
				{
					"coordinates": {
						"latitude": -29.0167,
						"longitude": 31.0167
					},
					"description": "Relax and enjoy the beautiful beaches around the park.",
					"name": "Addo Elephant National Park Beaches"
				}
			],
			"city": "Addo Elephant National Park",
			"coordinates": {
				"latitude": -29.0167,
				"longitude": 31.0167
			},
			"duration": "3 days",
			"description": "Wildlife park filled with elephants and other animals, combined with beautiful beaches."
		},
		{
			"attractions": [
				{
					"coordinates": {
						"latitude": -26.2041,
						"longitude": 27.9345
					},
					"description": "A vibrant city known for its history, culture, and great views.",
					"name": "Johannesburg"
				},
				{
					"coordinates": {
						"latitude": -26.2041,
						"longitude": 27.9345
					},
					"description": "Relaxing and enjoyable beaches near Johannesburg.",
					"name": "Johannesburg Beaches"
				}
			],
			"city": "Johannesburg",
			"coordinates": {
				"latitude": -26.2041,
				"longitude": 27.9345
			},
			"duration": "3 days",
			"description": "A city offering a blend of urban attractions and opportunities for relaxation on nearby beaches."
		}
	],
	"summary": "This itinerary combines the stunning natural beauty of South Africa with its beautiful beaches.  You will explore Cape Town's iconic landmarks, enjoy the scenic Garden Route, witness wildlife in Addo Elephant National Park, and experience the vibrancy of Johannesburg, all while relaxing on some of South Africa's most beautiful beaches. This itinerary is perfect for couples who enjoy nature and beach activities.",
	"bestPeriod": "September to April",
	"cultureInformation": "South Africa is a diverse country with a rich cultural heritage. You'll encounter various cultures, languages, and traditions throughout your travels. Be sure to learn a few basic phrases in Afrikaans or isiZulu.",
	"notes": "Be sure to book accommodations and tours in advance, especially during peak season.  Consider renting a car for exploring the Garden Route, or utilize pre-booked transportation to connect cities. Pack light clothing, sunscreen, insect repellent and comfortable walking shoes."
};

const generateItinerary = createAsyncThunk(
    'itinerary/generateItinerary',
    async ({ filters }, { rejectWithValue }) => {

        try {
            const response = await GoogleAIServices.generateTravelItinerary(filters);
            return response;

        } catch (error) {
            console.warn(error);
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    itinerary: undefined,
	isGenerating: false,
	hasGenerationError: false,
	generationError: ""
};

export const itinerarySlice = createSlice({
    name: "itinerary",
    initialState: initialState,
	reducers: {
        clearGeneratedItinerary: (state) => {
            state.itinerary = initialState.itinerary;
        }
    },
	extraReducers: (builder) => {
        builder
            .addCase(generateItinerary.pending, (state) => {
                state.isGenerating = true;
                state.itinerary = initialState.itinerary;
                state.hasGenerationError = false;
                state.generationError = "";
            })
            .addCase(generateItinerary.fulfilled, (state, action) => {

                state.itinerary = action.payload;
                state.isGenerating = false;
            })
            .addCase(generateItinerary.rejected, (state, action) => {
                state.isGenerating = false;
                state.hasGenerationError = true;
                state.generationError = action.payload;
            })
    }
});

export const itineraryActions = { ...itinerarySlice.actions, generateItinerary };

export default itinerarySlice.reducer;
