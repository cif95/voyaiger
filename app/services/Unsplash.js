import axios from "axios";

export class UnsplashServices {

	static async getImage(query) {

		if (!query) return;

		const response = await axios.post(
			'/api/unsplash',
			{ query }
		);

		return response?.data;
	}
}