import Image from "next/image";
import styles from "./ItineraryStop.module.css";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget.component";

export const ItineraryStop = ({ stop }) => {

	const { weather, image } = stop;

	return(
		<li key={stop.city}>

			<h4>{stop?.city}</h4>
			<span>Days: {stop?.duration}</span>
			<span>{stop?.description}</span>


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