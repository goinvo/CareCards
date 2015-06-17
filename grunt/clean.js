module.exports = {
	prepareBuild: {
		src: ['_build/**']
	},
	build: {
		src: ['_build/*', '!_build/reports/**', '!_build/*.zip']
	},
	removeTestCode: {
		src: ['tests/', 'images/Final/', 'images/optimized/', 'images/Test Images/NewImages/']
	},
	css: {
		src: [
			'_IT/**/*.css', '_IT/**/*.css.map',
			'Canvas/**/*.css', 'Canvas/**/*.css.map',
			'Common/**/*.css', 'Common/**/*.css.map',
			'Components/**/*.css', 'Components/**/*.css.map',
			'Sites/**/*.css', 'Sites/**/*.css.map'
		]
	}
}