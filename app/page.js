'use client';

// Style
import styles from "./page.module.css";
// Motion
import { motion, useScroll, useTransform, easeInOut } from 'motion/react';
// Components
import { Intro } from "components/Home/Intro/Intro.component";
import { Hero } from "components/Home/Hero/Hero.component";

export default function Home() {

	const { scrollYProgress } = useScroll();

	const transform = useTransform(
		scrollYProgress,
		[0, 0.2],
		["scale(0)","scale(3)"]
	);

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.15],
		[0, 1]
	);

	return (
		<main className={styles.scrollContainer}>
			<div className={styles.scrollContent}>
				<Hero />
				<motion.div
					className={styles.overlay}
					style={{ transform, opacity }}
					transition={{ duration: 2, ease: easeInOut }}
				/>
				<Intro />
			</div>
		</main>
	);
}
