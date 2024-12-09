import frame0 from "assets/images/01.jpg";
import frame2 from "assets/images/03.jpg";
import frame3 from "assets/images/04.jpg";
import frame5 from "assets/images/06.jpg";
import frame7 from "assets/images/08.jpg";
import frame8 from "assets/images/09.jpg";
import mobileFrame0 from "assets/images/01_mobile.jpg";
import mobileFrame2 from "assets/images/03_mobile.jpg";
import mobileFrame3 from "assets/images/04_mobile.jpg";
import mobileFrame7 from "assets/images/08_mobile.jpg";
import mobileFrame8 from "assets/images/09_mobile.jpg";

export const carouselFrameVariants = {
	initial: { 
		opacity: 0,
		transform: "scale(1)",
		transition: {
			transform: {
				duration: 7,
				ease: "easeInOut"
			},
			opacity: {
				duration: 1.2,
				ease: "linear"
			}
		}
	},
	fadeIn: { 
		opacity: 1,
		transform: "scale(1.1)",
		transition: {
			transform: {
				duration: 7,
				ease: "easeInOut"
			},
			opacity: {
				duration: 1.2,
				ease: "linear"
			}
		}
	}
}

export const caretAnimationVariants = {
	blinking: {
		opacity: [0, 0, 1, 1],
		duration: 1,
		transition: {
			repeat: Infinity,
			repeatDelay: 0.5,
			ease: "linear",
			times: [0, 0.5, 0.5, 1]
		}
	}
};

export const typywritingTextVariants = {
	initial: {
		width: 0
	},
	typewriting: {
		width: "100%",
		transition: {
			delay: 0.5,
			duration: 2
		}
	}
}

export const carouselFrames = [
	{
		content: "Ever dreamt about... ",
		imgSrc: frame0.src,
		mobileImgSrc: mobileFrame0.src,
		imgAlt: "maldive photograph"
	},
	{
		content: "the blue domes of Santorini?",
		imgSrc: frame2.src,
		mobileImgSrc: mobileFrame2.src,
		imgAlt: "Santorini island photograph"
	},
	{
		content: "an ancient temple in Japan? ",
		imgSrc: frame3.src,
		mobileImgSrc: mobileFrame3.src,
		imgAlt: "photo of a temple in Japan"
	},
	{
		content: "the Taj Mahal? ",
		imgSrc: frame8.src,
		mobileImgSrc: mobileFrame8.src,
		imgAlt: "photo of Taj Mahal temple in India"
	},
	{
		content: "discover what's next..",
		imgSrc: frame7.src,
		mobileImgSrc: mobileFrame7.src,
		imgAlt: "photo of Burano city"
	},
	{
		content: "The world is in your hands!",
		imgSrc: frame5.src,
		mobileImgSrc: frame5.src,
		imgAlt: "photo of a world map in a palm"
	}
]
