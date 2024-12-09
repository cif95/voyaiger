'use client';

import { useEffect, useState } from "react";

// Style
import "./Hero.style.css";

// Assets
import ScrollerSVG from "assets/icons/scroller.svg";

// Motion
import { motion } from "motion/react";

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
		<section className="hero">

			<div className="imageWrapper">
				{carouselFrames.map((frame, index) => {
					const isActiveFrame = carouselIndex === index;
					return(
						<motion.img
							key={frame?.imgSrc}
							variants={carouselFrameVariants}
							initial={"initial"}
							animate={isActiveFrame ? "fadeIn" : 'initial'}
							src={isMobile ? frame?.mobileImgSrc : frame?.imgSrc}
							alt={frame?.imgAlt}
						/>
					)
				})}
				<h1 className="text-display">
					<motion.span
						key={heroText}
						initial={{ width: 0}}
						animate={{ width: "100%"}}
						transition={{ delay: 0.5, duration: 2}}
						className="typewritingText"
					>
						{heroText}
					</motion.span>
					<motion.span
						variants={caretAnimationVariants}
						animate="blinking"
						className="caret"
					/>
				</h1>

				<motion.div
					className="scrollerIcon"
					animate={{
						transform: ['translateY(10px)', 'translateY(0px)', 'translateY(10px)']
					}}
					transition={{
						duration: 0.6,
						repeat: Infinity,
						repeatDelay: 0.5,
						ease: 'easeInOut',
						type: "tween"
					}}
				>
					<ScrollerSVG />
				</motion.div>
			</div>


		</section>
	)
}