import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAIServices } from "services/GoogleAI";

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
