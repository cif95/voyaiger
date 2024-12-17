'use client';

import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
// Next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import Link from "next/link";
// Style
import styles from "./ItinerarySection.module.css";
// Components
import { ItineraryStop } from "./ItineraryStop/ItineraryStop.component";
// Components
const TravelMap = dynamic(() => import('./TravelMap/TravelMap.component'), { ssr: false });


export const ItinerarySection = () => {

	const { itinerary } = useSelector((state) => state.itinerary);
	const dispatch = useDispatch();
	const router = useRouter();

	const generateNewItineraryHandler = async () => {
		
		localStorage.clear();
		dispatch(itineraryActions.clearGeneratedItinerary());
		router.push('/generation-lab');
	}

	useEffect(() => {
		const cachedItinerary = localStorage.getItem('itinerary');
		if (cachedItinerary) dispatch(itineraryActions.setItinerary(JSON.parse(cachedItinerary)));
	}, [dispatch]);

	if (!itinerary) return (
		<section className={`${styles.itinerary} container`}>
			<h2>No itinerary yet.</h2>
			<Link href="/generation-lab" className="primaryButton">
				Generation Lab &#128161;
			</Link>
		</section>
	);

	return(
		<section className={`${styles.itinerary} container`}>

			<h2>Your itinerary</h2>
			<h3 className={styles.title}>{itinerary?.itineraryName}</h3>

			<p>{itinerary?.summary}</p>
			<h4 className={styles.title}>Best Period: {itinerary?.bestPeriod}</h4>
			<p className={styles.notes}>{itinerary?.cultureInformation}</p>

			<h3 className={styles.title}>Stops: </h3>
			
			<ul className={`${styles.list} column gap-l`}>
				{itinerary && itinerary?.stops.map( (stop, index) => (
					<ItineraryStop stop={stop} number={index+1} key={stop?.city}/>
				))}
			</ul>

			<TravelMap />

			<div className="column gap-s">
				<h3 className={styles.title}>Want to generate one more?</h3>
				<button onClick={generateNewItineraryHandler} className="primaryButton">
					Back to Generation Lab &#128161;
				</button>
			</div>

		</section>
	)
}