'use client';

import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
// Next
import dynamic from 'next/dynamic';
// Style
import styles from "./ItinerarySection.module.css";
import { ItineraryStop } from "./ItineraryStop/ItineraryStop.component";
// Components
const TravelMap = dynamic(() => import('./TravelMap/TravelMap.component'), { ssr: false });


export const ItinerarySection = () => {

	const { itinerary } = useSelector((state) => state.itinerary);
	const dispatch = useDispatch();

	const generateNewItineraryHandler = async () => {
		
		localStorage.clear();
		dispatch(itineraryActions.clearGeneratedItinerary());
	}

	useEffect(() => {
		const cachedItinerary = localStorage.getItem('itinerary');
		if (cachedItinerary) dispatch(itineraryActions.setItinerary(JSON.parse(cachedItinerary)));
	}, [dispatch]);

	if (!itinerary) return <></>;

	return(
		<section className={styles.itinerary}>

			<h2>Your itinerary</h2>
			<h3 className={styles.title}>{itinerary?.itineraryName}</h3>

			<p>{itinerary?.summary}</p>
			<h4 className={styles.title}>Best Period: {itinerary?.bestPeriod}</h4>
			<p className={styles.notes}>{itinerary?.cultureInformation}</p>

			<h3 className={styles.title}>Stops: </h3>
			
			<ul className={`${styles.list} column gap-l`}>
				{itinerary && itinerary?.stops.map( stop => (<ItineraryStop stop={stop} key={stop?.city}/>))}
			</ul>

			<TravelMap />

			<div className="column gap-s">
				<h3 className={styles.title}>Want to generate a new one?</h3>
				<button onClick={generateNewItineraryHandler} className="primaryButton">
					Generate New Itinerary
				</button>
			</div>

		</section>
	)
}