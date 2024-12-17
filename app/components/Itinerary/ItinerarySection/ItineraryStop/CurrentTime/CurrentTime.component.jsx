import styles from "./CurrentTime.module.css";

import { useEffect, useState } from "react";

const ONE_MINUTE_MS = 60_000;

export const CurrentTime = ({ stopTimezone, stopName }) => {

	const [currentTime, setCurrentTime] = useState("");

	useEffect(() => {

		if (!stopTimezone) return;

		const updateTime = () => {
			const now = new Date();

			const formattedTime = now.toLocaleTimeString("en-US", {
				timeZone: stopTimezone,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			});

			setCurrentTime(formattedTime);
		};

		updateTime();
		const intervalId = setInterval(updateTime, ONE_MINUTE_MS);

		return () => clearInterval(intervalId);
	}, [stopTimezone]);

	return (
		<div className={styles.timeCard}>
			<h4>Current Time in {stopName}: {currentTime}</h4>
			<p>Timezone: {stopTimezone} </p>
		</div>
	);
};