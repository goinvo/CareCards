var grunt = require('grunt');

grunt.task.init = function() {};

grunt.initConfig({
    sprite: {
        all: {
            src: ['images/spritesheetSources/common/*.png', 'images/spritesheetSources/common/*.jpg', 'images/spritesheetSources/common/*.gif'],
            destImg: 'images/spritesCommon.png',
            destCSS: 'Common/Spritesheets/_spritesCommon.scss',
            engine: 'phantomjs',
            algorithm: 'binary-tree',
            imgPath: '/iwov-resources/images/spritesCommon.png',
            padding: 1
        }
    }
});

// Register your own tasks
grunt.registerTask('createSpritesheet', function() {});

// Load tasks from npm
grunt.loadNpmTasks('grunt-spritesmith');

// Finally run the tasks, with options and a callback when we're done
grunt.tasks(['createSpritesheet', 'sprite'], {}, function() {});