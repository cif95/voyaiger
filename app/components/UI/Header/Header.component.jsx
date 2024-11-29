'use client';

import GithubSVG from "assets/icons/github.svg";
import "./Header.css";

import { motion, useScroll, useTransform } from 'motion/react';

export const Header = () => {

	const { scrollYProgress } = useScroll();

	const backgroundColorOpacity = useTransform(
		scrollYProgress,
		[0, 0.5],
		[0.1, 0.7]
	);

	return(
		<header className="fixedHeader">

			<motion.div
				className='backgroundLayer'
				style={{ opacity: backgroundColorOpacity}}
			/>

			<h2>VoyAIger</h2>

			<GithubSVG className="github"/>
		</header>
	)
}