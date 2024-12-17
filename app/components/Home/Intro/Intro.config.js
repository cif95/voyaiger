export const animationConfigs = {
	container: {
		opacity: {
			inputs: [0.3, 0.4],
			outputs: [0, 1]
		}
	},
	title: {
		opacity: {
			inputs: [0.3, 0.5],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.3, 0.5],
			outputs: ["translateY(-50%)", "translateY(0%)"]
		}
	},
	paragraphs: {
		opacity: {
			inputs: [0.5, 0.6],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.5, 0.6],
			outputs: ["translateY(-20%)", "translateY(0%)"]
		}
	},
	image: {
		opacity: {
			inputs: [0.5, 0.65],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.5, 0.65],
			outputs: ["translateY(0%) scale(0.5)", "translateY(0%) scale(1)"]
		}
	},
	link: {
		opacity: {
			inputs: [0.6, 0.75],
			outputs: [0, 1]
		},
		transform: {
			inputs: [0.6, 0.75],
			outputs: ["translateY(0px)", "translateY(-250px)"]
		}
	}
}