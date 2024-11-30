import { configureStore } from '@reduxjs/toolkit';
import travelFiltersSlice from './slices/travelFilters.js';
import itinerarySlice from './slices/itinerary.js';

export default configureStore({
    reducer: {
        travelFilters: travelFiltersSlice,
		itinerary: itinerarySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});