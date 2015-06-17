module.exports = {
	compileCss: {
		files: [
			'_IT/**/*.scss',
			'Canvas/**/*.scss',
			'Common/**/*.scss',
			'Components/**/*.scss',
			'Sites/**/*.scss'
		],
		tasks: ['sass:dev']
	},
	clearCache9080: {
		files: [
			'_IT/**/*.xsl', '_IT/**/*.xml',
			'Canvas/**/*.xsl', 'Canvas/**/*.xml',
			'Common/**/*.xsl', 'Common/**/*.xml',
			'Components/**/*.xsl', 'Components/**/*.xml',
			'Sites/**/*.xsl', 'Sites/**/*.xml'
		],
		tasks: ['http:clearCache9080']
	},
	clearCache9086: {
		files: [
			'_IT/**/*.xsl', '_IT/**/*.xml',
			'Canvas/**/*.xsl', 'Canvas/**/*.xml',
			'Common/**/*.xsl', 'Common/**/*.xml',
			'Components/**/*.xsl', 'Components/**/*.xml',
			'Sites/**/*.xsl', 'Sites/**/*.xml'
		],
		tasks: ['http:clearCache9086']
	}
}