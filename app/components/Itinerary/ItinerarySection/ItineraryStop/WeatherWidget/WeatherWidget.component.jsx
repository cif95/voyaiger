import Image from "next/image";
import styles from "./WeatherWidget.module.css";

export const WeatherWidget = ({ weather }) => {

	if (!weather) return <></>;

	return(
		<div className="column gap-xs align-center">
			<h4>Weather:</h4>
			<Image
				className={styles.weatherIcon}
				src={weather?.iconUrl}
				alt={weather?.description}
				width={80}
				height={80}
			/>
			<div className="row gap-xs justify-center">
				<span>{weather?.temperature?.current}°</span>
			</div>
		</div>
	)
}