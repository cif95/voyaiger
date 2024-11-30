'use client';

import { ItinerarySection } from "components/Home/ItinerarySection/ItinerarySection.component";
import { Hero } from "./components/Home/Hero/Hero.component";
import { FiltersSection } from "components/Home/FiltersSections/FiltersSection.component";
import { Provider } from 'react-redux';
import store from 'store/store.js';

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Hero />
        <div className="container">
          <FiltersSection/>
          <ItinerarySection/>
        </div>
      </main> 
    </Provider>
  );
}
