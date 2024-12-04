import axios from "axios";

export class OpenWeatherServices {

	static async getWeather(query) {

		if (!query) return;

		const response = await axios.post(
			'/api/openWeather',
			{ coordinates: query }
		);

		return response?.data;
	}
}