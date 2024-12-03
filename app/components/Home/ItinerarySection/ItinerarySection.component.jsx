// React
import { useCallback, useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { itineraryActions } from "store/slices/itinerary";
// Services
import { UnsplashServices } from "services/Unsplash";
// Next
import Image from "next/image";
import dynamic from 'next/dynamic';
// Style
import "./ItinerarySection.style.css";
// Components
const TravelMap = dynamic(() => import('./TravelMap/TravelMap.component'), { ssr: false });


export const ItinerarySection = () => {

	const [image, setImage] = useState();

	const { itinerary } = useSelector((state) => state.itinerary);
	const dispatch = useDispatch();

	const fetchDestinationImage = useCallback( async () => {
		const image = await UnsplashServices.getImage(itinerary?.stops[0]?.city);
		setImage(image);

	},[itinerary?.stops]);

	const generateNewItineraryHandler = async () => {
		dispatch(itineraryActions.clearGeneratedItinerary());
	}

	useEffect(() => {

		if (!itinerary) return;
		fetchDestinationImage();
		
	}, [fetchDestinationImage, itinerary]);

	if (!itinerary) return <></>;

	return(
		<section className="column itinerary">

			<h2>Your itinerary</h2>
			<h3>{itinerary?.itineraryName}</h3>

			{ image &&
				<div className="column">
					<Image
						src={image?.urls?.full}
						alt={image?.description}
						width={image?.width}
						height={image?.height}
						className="itineraryImage"
					/>
					<p>Image provided by <a href={image?.user?.portfolio_url} target="_blank" rel="noopener noreferrer">{image?.user?.username}</a> </p>
				</div>
			}

			<p>{itinerary?.summary}</p>
			<h4>Best Period: {itinerary?.bestPeriod}</h4>
			<p>Notes: {itinerary?.cultureInformation}</p>

			<h4>Stops: </h4>
			<ul>
				{itinerary?.stops.map( stop => (
					<li key={stop.city}>
						<h4>{stop?.city}</h4>
						<span>Days: {stop?.duration}</span>
						<span>{stop?.description}</span>
						Attractions:
						<ol>
							{stop.attractions.map( attraction => (
								<li key={attraction?.name}>
									<span>{attraction?.name}: {attraction?.description}</span>
								</li>
							) )}
						</ol>
					</li>
				) )}
			</ul>

			<TravelMap />

			<h4>Want to generate a new one?</h4>
			<button onClick={generateNewItineraryHandler} className="primaryButton">
				Generate New Itinerary
			</button>

		</section>
	)
}