'use client';

import "./GenerationSection.style.css";
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
import { GenerateButton } from "./GenerateButton/GenerateButton.component";
import { Filters } from "./Filters/Filters.component";


export const GenerationSection = () => {

	const dispatch = useDispatch();
	const {
		focusActivities,
		peopleCount,
		continent,
		travelDuration
	} = useSelector((state) => state.travelFilters);

	const { isGenerating, itinerary } = useSelector((state) => state.itinerary);

	const generateItineraryHandler = () => {

		const selectedActivities = Object.entries(focusActivities)
			.filter(([key, value]) => value === true)
			.map(([key]) => key);

		const filters = {
			peopleCount,
			continent,
			travelDuration,
			activities: selectedActivities
		}
		dispatch(itineraryActions.generateItinerary({ filters }));
	}

	if (itinerary) return <></>;

	return(
		<section className="column generation">
			<Filters/>
			<h2>Ready?</h2>
			<GenerateButton onClick={generateItineraryHandler} className="primaryButton" disabled={isGenerating}>
				{isGenerating ? 'Generating..' : 'Generate'}
			</GenerateButton>
		</section>
	)
}