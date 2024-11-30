'use client';
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";

export const ItinerarySection = () => {

	const dispatch = useDispatch();
	const {
		focusActivities,
		peopleCount,
		continent,
		travelDuration
	} = useSelector((state) => state.travelFilters);

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

	return (
		<div>
			<h2>Click here to Generate it!</h2>

			<button onClick={generateItineraryHandler}>
				Generate
			</button>

		</div>
	);
}
