export const animationConfigs = {
	content: {
		opacity: {
			inputs: [0.15, 0.25],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.15, 0.25],
			outputs: ["translateY(-50%)", "translateY(0%)"]
		}
	},
	image: {
		opacity: {
			inputs: [0.15, 0.3, 0.5],
			outputs: [0, 1, 0.5]
		},
		transform: {
			inputs: [0.15, 0.3],
			outputs: ["translateY(0%) scale(0.5)", "translateY(0%) scale(1)"]
		}
	},
	link: {
		opacity: {
			inputs: [0.15, 0.35],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.15, 0.35],
			outputs: ["translateY(0vh)", "translateY(-30vh)"]
		}
	}
}