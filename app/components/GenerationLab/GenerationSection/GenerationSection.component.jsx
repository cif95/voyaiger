'use client';

// React
import { useEffect } from "react";
// Style
import styles from "./GenerationSection.module.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
// Components
import { GenerateButton } from "./GenerateButton/GenerateButton.component";
import { Filters } from "./Filters/Filters.component";
// Next
import { useRouter } from 'next/navigation'


export const GenerationSection = () => {

	const router = useRouter();
	const dispatch = useDispatch();
	
	const {
		focusActivities,
		peopleCount,
		continent,
		travelDuration
	} = useSelector((state) => state.travelFilters);

	const { isGenerating, hasGenerationError, itinerary } = useSelector((state) => state.itinerary);

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

	useEffect(() => {
		if (itinerary) {
			router.push('/itinerary');
		}
	}, [itinerary, router]);

	return(
		<section className={styles.generationSection}>
			<div className="container">
				<Filters/>
				<GenerateButton onClick={generateItineraryHandler} className="primaryButton" disabled={isGenerating}>
					{isGenerating ? 'Generating..' : 'Generate'}
				</GenerateButton>
				{hasGenerationError && <p className={styles.errorMessage}>Oops! Something went wrong &#128542; Retry later</p>}
			</div>
		</section>
	)
}