module.exports = {
    optimizeFontSVGs: {
        files: [{
            expand: true,
            cwd: 'libertyIconSVGs',
            src: ['*.svg'],
            dest: 'libertyIconSVGs',
            ext: '.svg'
        }]
    }
}