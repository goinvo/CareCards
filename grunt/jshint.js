 module.exports = {
	build: {
		options: {
			reporter: require("jshint-junit-reporter"),
			reporterOutput: "_build/reports/js/junit-output.xml",
			curly: true,
			eqeqeq: true,
			eqnull: true,
			browser: true,
			globals: {
				jQuery: true
			},
			ignores: [
			          'Common/Utilities/**/*.js',
			          'Components/Utilities/Map/MapService.js'
			          ]
		},
		files: {
			src: [
				'Canvas/**/*.js',
				'Common/**/*.js', 
				'Components/**/*.js', 
				'Sites/**/*.js'
			]
		}
	},
	test: {
		options: {
			reporter: require("jshint-junit-reporter"),
			reporterOutput: "tests/reports/js/junit-output.xml",
			curly: true,
			eqeqeq: true,
			eqnull: true,
			browser: true,
			globals: {
				jQuery: true
			},
			ignores: [
			          'Common/Utilities/**/*.js',
			          'Components/Utilities/Map/MapService.js'
			          ]
		},
		files: {
			src: [
				'_IT/**/*.js',
				'Canvas/**/*.js',
				'Common/**/*.js', 
				'Components/**/*.js', 
				'Sites/**/*.js'
			]
		}
	}
}