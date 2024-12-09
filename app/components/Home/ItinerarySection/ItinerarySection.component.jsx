// Redux
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
// Services
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
		dispatch(itineraryActions.clearGeneratedItinerary());
	}

	if (!itinerary) return <></>;

	return(
		<section className={"column" + styles.itinerary}>

			<h2>Your itinerary</h2>
			<h3>{itinerary?.itineraryName}</h3>

			<p>{itinerary?.summary}</p>
			<h4>Best Period: {itinerary?.bestPeriod}</h4>
			<p>Notes: {itinerary?.cultureInformation}</p>

			<h4>Stops: </h4>
			
			<ul>
				{itinerary && itinerary?.stops.map( stop => (<ItineraryStop stop={stop} key={stop?.city}/>))}
			</ul>

			<TravelMap />

			<h4>Want to generate a new one?</h4>
			<button onClick={generateNewItineraryHandler} className="primaryButton">
				Generate New Itinerary
			</button>

		</section>
	)
}