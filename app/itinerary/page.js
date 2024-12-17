'use client';

// Components
import { ItinerarySection } from "components/Itinerary/ItinerarySection/ItinerarySection.component";
// Redux
import { Provider } from 'react-redux';
import store from 'store/store.js';

export default function ItineraryPage() {

	return (
		<main>
			<Provider store={store}>
				<ItinerarySection />
			</Provider>
		</main> 
	);
}