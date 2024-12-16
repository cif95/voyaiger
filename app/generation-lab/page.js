'use client';

// Components
import { GenerationSection } from "components/GenerationLab/GenerationSection/GenerationSection.component";
// Redux
import { Provider } from 'react-redux';
import store from 'store/store.js';

export default function GenerationLabPage() {

	return (
		<main>
			<div>
				<Provider store={store}>
					<GenerationSection />
				</Provider>
			</div>
		</main> 
	);
}