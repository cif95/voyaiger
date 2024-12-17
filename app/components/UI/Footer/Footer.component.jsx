'use client';

import styles from "./Footer.module.css";

// Motion
import { motion, useScroll, useTransform } from 'motion/react';

export const Footer = () => {

	const { scrollYProgress } = useScroll();

	const opacity = useTransform(
		scrollYProgress,
		[0.45, 0.5],
		[0, 1]
	);

	return (
		<motion.footer className={styles.footer} style={{ opacity }}>
			<p className="text-label">
				Made with &#128420; by <a href="https://github.com/cif95" target="_blank" rel="noopener noreferrer">Viviana Cifarelli</a>
			</p>
		</motion.footer>
	)
}