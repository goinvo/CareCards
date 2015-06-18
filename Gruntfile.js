module.exports = function(grunt) {

    grunt.initConfig ({
    	pkg: grunt.file.readJSON('package.json'),
    	watch: {
    		options: {
				livereload: true,
				interrupt: true
			},
			sass: {
			    files: ['assets/scss/*.scss'],
			    tasks: ['sass'],
			    options: {
			        spawn: false
			    }
			}
    	},
    	sass: {
		    dev: {
		        options: {
		            style: 'expanded'
		        },
		        files: {
		            'assets/css/application.css': 'assets/scss/application.scss'
		        }
		    } 
		}
    });

    // Load dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch', 'sass']);
};

