import styles from "./Intro.module.css";
import { useSelector } from "react-redux";
// Motion
import { motion } from "motion/react";
import Image from "next/image";
import generationSrc from "assets/images/generation.jpg";

export const Intro = () => {

	const { itinerary } = useSelector((state) => state.itinerary);

	if (itinerary) return <></>;

	return(
		<section className={styles.section}>

			<motion.h2
				className="text-section-heading"
				initial={{ opacity: 0, transform: 'scale(0.7)' }}
				whileInView={{ opacity: 1, transform: 'scale(1)'}}
				transition={{ duration: 0.8, type: 'spring'}}
				viewport={{ once: true }}
			>
				Discover Your Perfect Journey
				<br/>
				with AI-Powered Travel Planning
			</motion.h2>

			<motion.h3
				className="text-small-heading"
				initial={{ opacity: 0, transform: 'scale(0.7)' }}
				whileInView={{ opacity: 1, transform: 'scale(1)'}}
				transition={{ duration: 0.8, type: 'spring', delay: 0.5}}
				viewport={{ once: true }}
			>
				Say goodbye to the hassle of organizing your next trip! 🌍✨ <br/>
				With VoyAIger you get tailor-made itineraries designed by AI to fit your style.
			</motion.h3>

			<motion.p
				initial={{ opacity: 0, transform: 'translateY(50%)' }}
				whileInView={{ opacity: 1, transform: 'translateY(0%)'}}
				transition={{ duration: 0.5, type: 'spring', bounce: 0.25, delay: 1}}
				viewport={{ once: true }}
			>
				Whether you&apos;re into scenic escapes, vibrant city life, or off-the-beaten-path adventures, just set your preferences, and let the magic happen!
			</motion.p>

			<motion.p
				initial={{ opacity: 0, transform: 'translateY(-50%)' }}
				whileInView={{ opacity: 1, transform: 'translateY(0%)'}}
				transition={{ duration: 0.5, type: 'spring', bounce: 0.25, delay: 1.5}}
				viewport={{ once: true }}
			>
				Why settle for average when your adventure can be extraordinary?<br/>
				👉 Start planning today and turn your dream vacation into reality!
			</motion.p>

			<motion.div
				className={styles.imageBox}
				initial={{ opacity: 0, transform: 'scale(0.5)' }}
				whileInView={{ opacity: 1, transform: 'scale(1)'}}
				transition={{ duration: 1, delay: 1.5}}
				viewport={{ once: true }}
			>
				<Image
					src={generationSrc}
					className={styles.image}
					alt="man in space suit looking at the earth"
					layout
				/>
			</motion.div>

		</section>
	)
}