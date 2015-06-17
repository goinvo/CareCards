module.exports = {
	build: {
		options: {
			compass: true,
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: 'Canvas',
	            src: ['**/*.scss', '!_IT/**/*.scss'],
	            dest: '_build/Canvas',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Common',
	            src: ['**/*.scss', '!_IT/**/*.scss'],
	            dest: '_build/Common',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Components',
	            src: ['**/*.scss', '!_IT/**/*.scss'],
	            dest: '_build/Components',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Sites',
	            src: ['**/*.scss', '!_IT/**/*.scss'],
	            dest: '_build/Sites',
	            ext: '.css'
	        }
        ]
	},
	devBuild: {
        options: {
            compass: true,
            style: 'expanded'
        },
		files: [
			{
	            expand: true,
	            cwd: 'Canvas',
	            src: ['**/*.scss'],
	            dest: '_build/Canvas',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Common',
	            src: ['**/*.scss'],
	            dest: '_build/Common',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Components',
	            src: ['**/*.scss'],
	            dest: '_build/Components',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Sites',
	            src: ['**/*.scss'],
	            dest: '_build/Sites',
	            ext: '.css'
	        }
        ]
    },
	dev: {
		options: {
		    sourceMap: true,
			compass: true,
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: '_IT',
	            src: ['**/*.scss'],
	            dest: '_IT',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Canvas',
	            src: ['**/*.scss'],
	            dest: 'Canvas',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Common',
	            src: ['**/*.scss'],
	            dest: 'Common',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Components',
	            src: ['**/*.scss'],
	            dest: 'Components',
	            ext: '.css'
	        },
			{
	            expand: true,
	            cwd: 'Sites',
	            src: ['**/*.scss'],
	            dest: 'Sites',
	            ext: '.css'
	        }
        ]
	}
}