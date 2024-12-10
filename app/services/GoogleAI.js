import axios from "axios";

export class GoogleAIServices {

	/**
	 * Generates a travel itinerary based on provided filters.
	 *
	 * @param {Object} filters - The filters to customize the travel itinerary.
	 * @param {string} filters.peopleCount - The number of travelers. Must be one of:
	 *     - "one" (Single traveler)
	 *     - "two" (Two people traveling together)
	 *     - "smallGroup" (A group of 3-5 people)
	 *     - "group" (More than 5 people).
	 * @param {string} filters.continent - The continent to travel to. Must be one of:
	 *     - "europe"
	 *     - "africa"
	 *     - "northAmerica"
	 *     - "southAmerica"
	 *     - "centralAmerica"
	 *     - "asia"
	 *     - "oceania".
	 * @param {string} filters.travelDuration - The length of the trip. Must be one of:
	 *     - "oneWeekend" (Short weekend trip)
	 *     - "oneWeek" (One week)
	 *     - "twoWeeks" (Two weeks).
	 * @param {string[]} filters.activities - Array of preferred activities to focus on during the trip. Possible values:
	 *     - "nature"
	 *     - "beach"
	 *     - "mountains"
	 *     - "artAndCulture".
	 *     - "nightlife"
	 *
	 * @returns {Promise<void>} A promise that resolves when the itinerary is generated.
	 */
	static async generateTravelItinerary(filters) {

		if (!filters) return;

		const prompt = `generate an itinerary with these filters { peopleCount: ${filters?.peopleCount}, continent: ${filters?.continent}, travelDuration: ${filters.travelDuration}, activities: ${filters?.activities}, nightlife: ${filters.nightlife}}`

		const response = await axios.post(
			'/api/googleGemini',
			{ prompt }
		);

		return response?.data;
	}
}