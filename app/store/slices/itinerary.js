import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAIServices } from "services/GoogleAI";
import { UnsplashServices } from "services/Unsplash";
import { OpenWeatherServices } from "services/OpenWeather";

const generateItinerary = createAsyncThunk(
    'itinerary/generateItinerary',
    async ({ filters }, { rejectWithValue }) => {

        try {
            const response = await GoogleAIServices.generateTravelItinerary(filters);

			if (!response) return;

			let itinerary = {...response};

			const { stops } = itinerary;

			for (let i = 0; i < stops?.length; i++) {
				const stop = stops[i];

				const image = await UnsplashServices.getImage(stop?.city);

				const weather = await OpenWeatherServices.getWeather(stop?.coordinates);

				stop.image = image ?? {};
				stop.weather = weather ?? {};
			}

			localStorage.setItem('itinerary', JSON.stringify(itinerary));
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
        },
		setItinerary: (state, action) => {
            state.itinerary = action?.payload;
        },
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
