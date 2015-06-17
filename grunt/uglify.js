module.exports = {
	build: {
		options: {
		    ASCIIOnly: true,
		    compress: {
		        drop_console: true
		      }
		},
		files: [{
			expand: true,
			src: [
				'Canvas/**/*.js', '!Canvas/_IT/**/*.js',
				'Common/**/*.js', '!Common/_IT/**/*.js', '!Common/**/*.min.js', '!Common/Utilities/Modernizr/*.js',
				'Components/**/*.js', '!Components/_IT/**/*.js',
				'Sites/**/*.js', '!Sites/_IT/**/*.js',
			  ],
			dest: '_build'
		}]
		
	},
	devBuildMin: {
	    options: {
            ASCIIOnly: true
	    },
        files: [{
            expand: true,
            src: [
				'Canvas/**/*.js', 
				'Common/**/*.js', '!Common/**/*.min.js', '!Common/Utilities/Modernizr/*.js',
				'Components/**/*.js', 
				'Sites/**/*.js'	
			],
            dest: '_build'
        }]
        
    }
}