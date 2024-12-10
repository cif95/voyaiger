import { useState, useCallback, useEffect } from "react";
import { UnsplashServices } from "services/Unsplash";
import { OpenWeatherServices } from "services/OpenWeather";
import Image from "next/image";
import styles from "./ItineraryStop.module.css";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget.component";

export const ItineraryStop = ({ stop }) => {

	const [image, setImage] = useState();
	const [weather, setWeather] = useState();
	const [isLoading, setIsLoading] = useState();

	const fetchDestinationImage = useCallback(async () => {
		const image = await UnsplashServices.getImage(stop?.city);
		setImage(image);
	},[stop?.city]);

	const fetchDestinationWeather = useCallback( async () => {
		const weather = await OpenWeatherServices.getWeather(stop?.coordinates);
		setWeather(weather);
	},[stop?.coordinates]);

	const fetchItineraryDetails = useCallback(() => {

		try {
			setIsLoading(true);
			fetchDestinationImage();
			fetchDestinationWeather();
		} catch (error) {
			console.warn("ERR on fetchItineraryDetails");
		} finally {
			setIsLoading(false);
		}
	},[fetchDestinationImage, fetchDestinationWeather]);

	useEffect(() => {

		if (!stop) return;
		fetchItineraryDetails();
	}, [fetchItineraryDetails, stop]);

	const hasLoadedData = !isLoading && image && weather;

	return(
		<li key={stop.city}>

			<h4>{stop?.city}</h4>
			<span>Days: {stop?.duration}</span>
			<span>{stop?.description}</span>

			{hasLoadedData &&
				<>
					<WeatherWidget weather={weather}/>
					<div className={styles.imageWrapper}>
						<Image
							src={image?.urls?.regular}
							alt={image?.alt_description}
							width={image?.width}
							height={image?.height}
							className="itineraryImage"
						/>
						<p>Image provided by <a href={image?.user?.portfolio_url} target="_blank" rel="noopener noreferrer">{image?.user?.username}</a> </p>
					</div>
				</>
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