'use client';

import styles from "./Intro.module.css";
// Motion
import { motion, useScroll, useTransform } from 'motion/react';
// Next
import Image from "next/image";
// Assets
import generationSrc from "assets/images/generation.jpg";
// Config
import { animationConfigs } from "./Intro.config";
import Link from "next/link";

export const Intro = () => {

	const { scrollYProgress } = useScroll();

	const {
		container,
		title,
		paragraphs,
		image,
		link
	} = animationConfigs;

	const opacity = useTransform(
		scrollYProgress,
		container?.opacity?.inputs,
		container?.opacity?.outputs
	);

	const titleTransform = useTransform(
		scrollYProgress,
		title?.transform?.inputs,
		title?.transform?.outputs
	);

	const titleOpacity = useTransform(
		scrollYProgress,
		title?.opacity?.inputs,
		title?.opacity?.outputs
	);

	const paragraphOpacity = useTransform(
		scrollYProgress,
		paragraphs?.opacity?.inputs,
		paragraphs?.opacity?.outputs
	);

	const paragraphTransform = useTransform(
		scrollYProgress,
		paragraphs?.transform?.inputs,
		paragraphs?.transform?.outputs
	);

	const imageOpacity = useTransform(
		scrollYProgress,
		image?.opacity?.inputs,
		image?.opacity?.outputs
	);

	const imageTransform = useTransform(
		scrollYProgress,
		image?.transform?.inputs,
		image?.transform?.outputs
	);

	const linkOpacity = useTransform(
		scrollYProgress,
		link?.opacity?.inputs,
		link?.opacity?.outputs
	);

	const linkTransform = useTransform(
		scrollYProgress,
		link?.transform?.inputs,
		link?.transform?.outputs
	);

	return(
		<motion.section className={styles.section} style={{ opacity }}>

			<motion.h2
				className="text-section-heading"
				style={{ transform: titleTransform, opacity: titleOpacity }}
			>
				Discover Your Perfect Journey
				<br/>
				with AI-Powered Travel Planning
			</motion.h2>

			<motion.h3
				className="text-small-heading"
				style={{ transform: paragraphTransform, opacity: paragraphOpacity }}
			>
				Say goodbye to the hassle of organizing your next trip! 🌍✨ <br/>
				With VoyAIger you get tailor-made itineraries designed by AI to fit your style.
			</motion.h3>

			<motion.p
				style={{ transform: paragraphTransform, opacity: paragraphOpacity }}
			>
				Whether you&apos;re into scenic escapes, vibrant city life, or off-the-beaten-path adventures, just set your preferences, and let the magic happen!
			</motion.p>

			<motion.p
				style={{ transform: paragraphTransform, opacity: paragraphOpacity }}
			>
				Why settle for average when your adventure can be extraordinary?<br/>
				👉 Start planning today and turn your dream vacation into reality!
			</motion.p>

			<motion.div
				className={styles.imageBox}
				style={{ transform: imageTransform, opacity: imageOpacity }}
			>
				<Image
					src={generationSrc}
					className={styles.image}
					alt="man in space suit looking at the earth"
					layout
				/>
			</motion.div>

			<motion.div
				className={styles.link}
				style={{ transform: linkTransform, opacity: linkOpacity }}
			>
				<Link href="/generation-lab" className="highlightButton">
					Start Now!
				</Link>
			</motion.div>

		</motion.section>
	)
}