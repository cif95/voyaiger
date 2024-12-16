'use client';

import { useEffect, useState } from "react";
// Style
import styles from "./Hero.module.css";
// Motion
import { motion } from 'motion/react';
// Helpers
import { 
	carouselFrameVariants,
	caretAnimationVariants,
	carouselFrames
} from "./Hero.helpers";

import useIsMobile from "hooks/use-is-mobile";

const LAST_INDEX = carouselFrames?.length - 1;
const CAROUSEL_FRAME_DURATION = 5000;

export const Hero = () => {

	const [carouselIndex, setCarouselIndex] = useState(0);

	const isMobile = useIsMobile();
	const activeFrame = carouselFrames[carouselIndex];
	const heroText = activeFrame?.content;

	useEffect(() => {

		const intervalId = setInterval(() => {

			setCarouselIndex( prev => {
				const nextIndex = prev + 1;
				if (nextIndex > LAST_INDEX ) return 0;
				return nextIndex;
			});
			
		}, CAROUSEL_FRAME_DURATION);
		
		return () => { clearInterval(intervalId); }

	}, []);

	return(
		<section className={styles.hero}>
			<div className={styles.imageWrapper}>
				<h1 className={`${styles.heroTitle} text-display`}>
					<motion.span
						key={heroText}
						initial={{ width: 0}}
						animate={{ width: "100%"}}
						transition={{ delay: 0.5, duration: 2}}
						className={styles.typewritingText}
					>
						{heroText}
					</motion.span>
					<motion.span
						variants={caretAnimationVariants}
						animate="blinking"
						className={styles.caret}
					/>
				</h1>
				{carouselFrames.map((frame, index) => {
					const isActiveFrame = carouselIndex === index;
					return(
						<motion.img
							key={frame?.imgSrc}
							className={styles.image}
							variants={carouselFrameVariants}
							initial={"initial"}
							animate={isActiveFrame ? "fadeIn" : 'initial'}
							src={isMobile ? frame?.mobileImgSrc : frame?.imgSrc}
							alt={frame?.imgAlt}
						/>
					)
				})}
				<div className={styles.scrollerIcon}></div>
			</div>
		</section>
	)
}