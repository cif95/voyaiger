import styles from "./Intro.module.css";


export const Intro = () => {

	return(
		<section className={styles.section}>
			<h2 className="text-section-heading">
				Discover Your Perfect Journey
				<br/>
				with AI-Powered Travel Planning
			</h2>

			<h3 className="text-small-heading">
				Say goodbye to the hassle of organizing your next trip! 🌍✨
			</h3>

			<p>
				With our smart travel planner, you get tailor-made itineraries designed by AI to fit your style.<br/>
				Whether you&apos;re into scenic escapes, vibrant city life, or off-the-beaten-path adventures, just set your preferences, and let the magic happen!
			</p>

			<p>
				Why settle for average when your adventure can be extraordinary?
				👉 Start planning today and turn your dream vacation into reality!
			</p>
		</section>
	)
}