import axios from "axios";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

export async function POST(req) {

	try {

		const body = await req.json();
		const { coordinates } = body;

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${API_KEY}&units=metric`;
		const response = await axios.get(url);
		const data = response.data;
		const iconCode = data?.weather[0]?.icon;

		const weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
		const weatherDescription = data?.weather[0]?.description;
		const currentTemp = +(data?.main?.temp)?.toFixed(0);
		const minTemp = (data?.main?.temp_min)?.toFixed(0);
		const maxTemp = (data?.main?.temp_max)?.toFixed(0);

		const weather = {
			iconUrl: weatherIcon,
			description: weatherDescription,
			temperature: {
				current: currentTemp,
				min: minTemp,
				max: maxTemp
			}
		}

		return new Response(JSON.stringify(weather), { status: 200, headers: {"Content-Type": "application/json"}});

	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
	}
}