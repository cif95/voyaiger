import { useSelector } from 'react-redux';
import { Map, Marker, ZoomControl } from "pigeon-maps";

const TravelMap = () => {

	const { itinerary } = useSelector((state) => state.itinerary);

	if (!itinerary) return <></>;

	const center = [itinerary?.stops[0].coordinates.latitude, itinerary?.stops[0].coordinates.longitude];

	return (
		<Map height={300} defaultCenter={center} defaultZoom={3} id="pigeon-map">
			<ZoomControl />
			{itinerary?.stops?.map((stop) => (
				<Marker key={stop.city} width={50} anchor={[stop.coordinates.latitude, stop.coordinates.longitude]} />
			))}
		</Map>
	)
};

export default TravelMap;