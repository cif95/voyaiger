// Components
import { Intro } from "components/Home/Intro/Intro.component";
import { Hero } from "components/Home/Hero/Hero.component";

export default function Home() {

  return (
    <main>
      <Hero />
      <div className="container">
        <Intro />
      </div>
    </main> 
  );
}
