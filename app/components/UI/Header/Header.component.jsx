'use client';
// React
import { useEffect, useState } from "react";
// Next
import Link from "next/link";
import { usePathname } from 'next/navigation'
// Assets
import GithubSVG from "assets/icons/github.svg";
// Style
import styles from "./Header.module.css";
// Motion
import { motion, useScroll, useTransform } from 'motion/react';

export const Header = () => {

	const [isItineraryPage, setIsItineraryPage] = useState(false);

	const { scrollYProgress } = useScroll();

	const pathname = usePathname();

	const backgroundColorOpacity = useTransform(
		scrollYProgress,
		[0, 0.5],
		[0.1, 0.7]
	);

	useEffect(() => {
		if (pathname === "/itinerary") {
			setIsItineraryPage(true);
		} else {
			setIsItineraryPage(false);
		}
	}, [pathname])


	return(
		<header className={isItineraryPage ? styles.fixedHeaderFilled : styles.fixedHeader}>

			{ !isItineraryPage && <motion.div
				className={styles.backgroundLayer}
				style={{ opacity: backgroundColorOpacity}}
			/>}

			<Link href="/">
				<h2>VoyAIger</h2>
			</Link>

			<Link href="/generation-lab" className={styles.navLink}>
				<h2>Lab</h2>
			</Link>

			<a href="https://github.com/cif95/voyaiger" target="_blank" rel="noopener noreferrer">
				<GithubSVG className={styles.githubSvg}/>
			</a>

		</header>
	)
}