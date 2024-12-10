import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	focusActivities: {
		nature: false,
		mountains: false,
		artAndCulture: false,
		beach: false,
		nightlife: false,
	},
	peopleCount: "two",
	continent: "europe",
	travelDuration: "oneWeekend",
};

export const travelFiltersSlice = createSlice({
    name: "travelFilters",
    initialState: initialState,
    reducers: {
        updateTravelActivitiesFilters: (state, action) => {
			const updatedState = {...state.focusActivities};
			updatedState[action.payload] = !updatedState[action.payload];
            state.focusActivities = updatedState;
        },
		updatePeopleCountFilter: (state, action) => {
			state.peopleCount = action.payload;
        },
		updateContinentFilter: (state, action) => {
			state.continent = action.payload;
        },
		updateTravelDurationFilter: (state, action) => {
			state.travelDuration = action.payload;
        },
    },
});

export const travelFiltersActions = { ...travelFiltersSlice.actions };

export default travelFiltersSlice.reducer;