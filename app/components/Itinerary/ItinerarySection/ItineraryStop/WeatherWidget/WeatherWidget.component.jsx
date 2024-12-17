import Image from "next/image";
import styles from "./WeatherWidget.module.css";

export const WeatherWidget = ({ weather }) => {

	if (!weather) return <></>;

	return(
		<div className={styles.container}>
			<h4>Weather:</h4>
			<div className="row gap-l align-center">
				<Image
					src={weather?.iconUrl}
					alt={weather?.description}
					width={80}
					height={80}
				/>
				<p className="column gap-xs">
					<span>Current: {weather?.temperature?.current}°</span>
					<span>Min: {weather?.temperature?.min}°</span>
					<span>Max: {weather?.temperature?.max}°</span>
				</p>
			</div>
		</div>
	)
}