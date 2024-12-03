import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const TravelMap = () => {

	const { itinerary } = useSelector((state) => state.itinerary);

	if (!itinerary) return <></>;

	const path = itinerary?.stops.map(stop => [stop.coordinates.latitude, stop.coordinates.longitude]);

	return (
		<MapContainer
			center={[itinerary?.stops[0].coordinates.latitude, itinerary?.stops[0].coordinates.longitude]}
			zoom={10}
			key={JSON.stringify(itinerary?.stops)}
			style={{ width: "100%", height: "500px", borderRadius: "15px" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			<Polyline 
				positions={path} 
				color="#50089e" 
			/>

			{itinerary.stops.map((stop, index) => (
				<Marker
					key={index}
					opacity={0}
					position={[stop.coordinates?.latitude, stop.coordinates?.longitude]}
				>
					<Popup>
						<b>{stop.city}</b>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default TravelMap;