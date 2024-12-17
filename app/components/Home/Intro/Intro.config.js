export const animationConfigs = {
	content: {
		opacity: {
			inputs: [0.15, 0.25, 0.7],
			outputs: [0, 1, 0]
		},
		transform: {
			inputs: [0.15, 0.25, 0.7],
			outputs: ["translateY(70%)", "translateY(10%)", "translateY(-70%)"]
		}
	},
	image: {
		opacity: {
			inputs: [0.15, 0.3],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.15, 0.3],
			outputs: ["translateY(0%) scale(0.5)", "translateY(0%) scale(1)"]
		}
	},
	link: {
		opacity: {
			inputs: [0.5, 0.7],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.5, 0.7],
			outputs: ["translateY(0vh)", "translateY(0vh)"]
		}
	}
}