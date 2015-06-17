var grunt = require('grunt');

grunt.task.init = function() {};

grunt.initConfig({
    sprite: {
        all: {
            src: ['images/spritesheetSources/rss/*.png', 'images/spritesheetSources/rss/*.jpg', 'images/spritesheetSources/rss/*.gif'],
            destImg: 'images/spritesRSS.png',
            destCSS: 'Common/Spritesheets/_spritesRSS.scss',
            engine: 'phantomjs',
            algorithm: 'binary-tree',
            imgPath: '/iwov-resources/images/spritesRSS.png',
            padding: 1,
            cssVarMap: function (sprite) {
      		  sprite.name = 'rss_' + sprite.name;
            }
        }
    }
	
});

// Register your own tasks
grunt.registerTask('createSpritesheetRSS', function() {});

// Load tasks from npm
grunt.loadNpmTasks('grunt-spritesmith');

// Finally run the tasks, with options and a callback when we're done
grunt.tasks(['createSpritesheetRSS', 'sprite'], {}, function() {});