import { useState, useCallback, useEffect } from "react";
import { UnsplashServices } from "services/Unsplash";
import { OpenWeatherServices } from "services/OpenWeather";
import Image from "next/image";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget.component";

export const ItineraryStop = ({ stop }) => {

	const [image, setImage] = useState();
	const [weather, setWeather] = useState();

	const fetchDestinationImage = useCallback( async () => {
		const image = await UnsplashServices.getImage(stop?.city);
		setImage(image);

	},[stop?.city]);

	const fetchDestinationWeather = useCallback( async () => {
		const weather = await OpenWeatherServices.getWeather(stop?.coordinates);
		setWeather(weather);
	},[stop?.coordinates]);

	useEffect(() => {

		if (!stop) return;
		fetchDestinationImage();
		fetchDestinationWeather();
		
	}, [fetchDestinationImage, fetchDestinationWeather, stop]);

	return(
		<li key={stop.city}>

			<h4>{stop?.city}</h4>
			<span>Days: {stop?.duration}</span>
			<span>{stop?.description}</span>

			{ weather && <WeatherWidget weather={weather}/>}

			{ image &&
				<div className="column">
					<Image
						src={image?.urls?.regular}
						alt={image?.alt_description}
						width={image?.width}
						height={image?.height}
						className="itineraryImage"
					/>
					<p>Image provided by <a href={image?.user?.portfolio_url} target="_blank" rel="noopener noreferrer">{image?.user?.username}</a> </p>
				</div>
			}

			Attractions:
			<ol>
				{stop.attractions.map( attraction => (
					<li key={attraction?.name}>
						<span>{attraction?.name}: {attraction?.description}</span>
					</li>
				) )}
			</ol>
		</li>
	)
}