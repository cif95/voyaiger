import Image from "next/image";
import styles from "./WeatherWidget.module.css";

export const WeatherWidget = ({ weather }) => {

	if (!weather) return <></>;

	return(
		<div className="column">
			<h4>Current Weather:</h4>
			<Image
				className={styles.weatherIcon}
				src={weather?.iconUrl}
				alt={weather?.description}
				width={80}
				height={80}
			/>
			<p>{weather?.description}</p>
			<p>{weather?.temperature?.current}°</p>
		</div>
	)
}