import Image from "next/image";
import styles from "./ItineraryStop.module.css";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget.component";

export const ItineraryStop = ({ stop }) => {

	const { weather, image } = stop;

	return(
		<li key={stop.city} className={styles.container}>

			<div className="row gap-m space-between">
				<div className="column" style={{maxWidth: '85%'}}>
					<div className="row gap-xs">
						<h4>{stop?.city}</h4>
						<span>{stop?.duration}</span>
					</div>
					<span>{stop?.description}</span>
				</div>
				<WeatherWidget weather={weather}/>
			</div>

			<figure className={styles.imageWrapper}>
				<Image
					src={image?.urls?.regular}
					alt={image?.alt_description}
					width={image?.width}
					height={image?.height}
					className="itineraryImage"
				/>
				<figcaption className="text-label">Image provided by <a href={image?.user?.portfolio_url} target="_blank" rel="noopener noreferrer">@{image?.user?.username}</a> </figcaption>
			</figure>
			
			<h4>Attractions:</h4>
			<ol>
				{stop.attractions.map( attraction => (
					<li key={attraction?.name}>
						<span> &#x2022; {attraction?.name}: {attraction?.description}</span>
					</li>
				) )}
			</ol>
		</li>
	)
}