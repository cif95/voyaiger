import Image from "next/image";
import styles from "./ItineraryStop.module.css";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget.component";
import { CurrentTime } from "./CurrentTime/CurrentTime.component";

export const ItineraryStop = ({ stop, number }) => {

	const { weather, image } = stop;

	return(
		<li key={stop.city} className={styles.container}>

			<div className="column gap-s">
				<div className="row gap-xs">
					<h3>{number}.{stop?.city} <i>for</i> {stop?.duration}</h3>
				</div>
				<span>{stop?.description}</span>
			</div>

			<figure className={styles.imageWrapper}>
				<Image
					src={image?.urls?.regular}
					alt={image?.alt_description}
					width={image?.width}
					height={image?.height}
					className={styles.image}
				/>
				<figcaption className={`${styles.image} text-label`}>Image provided by <a href={image?.user?.portfolio_url} target="_blank" rel="noopener noreferrer">@{image?.user?.username}</a> </figcaption>
			</figure>

			<div className="row gap-l">
				<WeatherWidget weather={weather}/>
				<CurrentTime stopTimezone={stop?.timeZone} stopName={stop?.city} />
			</div>

			<h3>Attractions:</h3>
			<ol className={styles.attractionsList}>
				{stop.attractions.map( attraction => (
					<li key={attraction?.name}>
						&#x2022; <b>{attraction?.name}</b>: {attraction?.description}
					</li>
				) )}
			</ol>
		</li>
	)
}