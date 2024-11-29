import { Hero } from "./components/Home/Hero/Hero.component";
import { FiltersSection } from "components/Home/FiltersSections/FiltersSection.component";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <FiltersSection/>
      </div>
    </main> 
  );
}
