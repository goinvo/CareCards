module.exports = {
	build: {
		options: {
			archive: '_build/ecomm_resources_build.zip',
			mode: 'zip'
	    },
		files: [{
			expand: true, 
			cwd: '_build/',
			src: ['**',
			      '!reports/**']
		}]
	},
	devBuild: {
        options: {
            archive: '_build/ecomm_resources_devBuild.zip',
            mode: 'zip'
        },
        files: [{
            expand: true, 
            cwd: '_build/',
            src: ['**',
                  '!reports/**']
        }]
    }
}
 