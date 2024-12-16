'use client';

// Next
import Link from "next/link";
// Assets
import GithubSVG from "assets/icons/github.svg";
// Style
import styles from "./Header.module.css";
// Motion
import { motion, useScroll, useTransform } from 'motion/react';

export const Header = () => {

	const { scrollYProgress } = useScroll();

	const backgroundColorOpacity = useTransform(
		scrollYProgress,
		[0, 0.5],
		[0.1, 0.7]
	);

	return(
		<header className={styles.fixedHeader}>

			<motion.div
				className={styles.backgroundLayer}
				style={{ opacity: backgroundColorOpacity}}
			/>

			<Link href="/">
				<h2>VoyAIger</h2>
			</Link>

			<a href="https://github.com/cif95/voyaiger" target="_blank" rel="noopener noreferrer">
				<GithubSVG className={styles.githubSvg}/>
			</a>

		</header>
	)
}