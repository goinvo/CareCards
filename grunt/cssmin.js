module.exports = {
	all: {
		expand: true,
		cwd: '_build',
		src: ['**/*.css', '!**/*.min.css'],
		dest: '_build',
		ext: '.css'
	}
}