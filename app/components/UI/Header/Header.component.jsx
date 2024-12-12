'use client';

import Link from "next/link";
import GithubSVG from "assets/icons/github.svg";
import styles from "./Header.module.css";

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

			<h2>VoyAIger</h2>

			<a href="https://github.com/cif95/voyaiger" target="_blank" rel="noopener noreferrer">
				<GithubSVG className={styles.githubSvg}/>
			</a>

		</header>
	)
}