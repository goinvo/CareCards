module.exports = {
	options: {
		logConcurrentOutput: true
	},
	runTests: {
		tasks: ['jshint:test', 'csslint:test']
	},
	port9080: {
		tasks: ['watch:compileCss', 'watch:clearCache9080']
	},
	port9086: {
		tasks: ['watch:compileCss', 'watch:clearCache9086']
	}
};