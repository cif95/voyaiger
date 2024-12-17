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
		content,
		image,
		link
	} = animationConfigs;


	const contentTransform = useTransform(
		scrollYProgress,
		content?.transform?.inputs,
		content?.transform?.outputs
	);

	const contentOpacity = useTransform(
		scrollYProgress,
		content?.opacity?.inputs,
		content?.opacity?.outputs
	);

	const linkOpacity = useTransform(
		scrollYProgress,
		link?.opacity?.inputs,
		link?.opacity?.outputs
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

	const linkTransform = useTransform(
		scrollYProgress,
		link?.transform?.inputs,
		link?.transform?.outputs
	);

	return(
		<section className={styles.section}>

			<motion.div className={styles.sectionContent} style={{ transform: contentTransform, opacity: contentOpacity }}>
				<h2 className="text-section-heading">
					Discover Your Perfect Journey
					<br/>
					with AI-Powered Travel Planning
				</h2>

				<h3 className="text-small-heading">
					Say goodbye to the hassle of organizing your next trip! 🌍✨ <br/>
					With VoyAIger you get tailor-made itineraries designed by AI to fit your style.
				</h3>

				<p>
					Why settle for average when your adventure can be extraordinary?<br/>
					👉 Start planning today and turn your dream vacation into reality!
				</p>

				<motion.div
					className={styles.imageBox}
					style={{ transform: imageTransform, opacity: imageOpacity }}
				>
					<Image
						src={generationSrc}
						className={styles.image}
						alt="man in space suit looking at the earth"
					/>
				</motion.div>
			</motion.div>

			<motion.div
				className={styles.ctaContent} 
				style={{ 
					transform: linkTransform,
					opacity: linkOpacity
				}}
			>
				<motion.p
					animate={{ transform: ['scale(0.8)','scale(1)']}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
						repeatType: "reverse",
					}}
					style={{ textAlign: 'center'}}
				>
					<Link href="/generation-lab" className="highlightButton">
						Start Now!
					</Link>
				</motion.p>
			</motion.div>

		</section>
	)
}