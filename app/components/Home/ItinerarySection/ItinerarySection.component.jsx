import { useSelector } from "react-redux";


export const ItinerarySection = () => {

	const { itinerary } = useSelector((state) => state.itinerary);

	if (!itinerary) return <></>;

	return(
		<div>
			<h2>ITINERARY</h2>
		</div>
	)
}