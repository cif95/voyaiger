import axios from "axios";

const API_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function POST(req) {

	try {

		const body = await req.json();
		const { query } = body;

		const url = `https://api.unsplash.com/search/photos`;

		const response = await axios.get(url, {
			params: {
				query,
				client_id: API_KEY,
				per_page: 1,
			},
		});

		const image = response.data.results[0] ?? null;

		return new Response(JSON.stringify(image), { status: 200, headers: {"Content-Type": "application/json"}});

	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
	}
}