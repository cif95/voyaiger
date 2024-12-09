'use client';
// Components
import { GenerationSection } from "components/Home/GenerationSection/GenerationSection.component";
import { ItinerarySection } from "components/Home/ItinerarySection/ItinerarySection.component";
import { Intro } from "components/Home/Intro/Intro.component";
import { Hero } from "./components/Home/Hero/Hero.component";

// Redux
import { Provider } from 'react-redux';
import store from 'store/store.js';
// Style
import "./globals.css";

export default function Home() {

  return (
    <Provider store={store}>
      <main>
        <Hero />
        <div className="container">
          <Intro />
          <GenerationSection />
          <ItinerarySection />
        </div>
      </main> 
    </Provider>
  );
}
