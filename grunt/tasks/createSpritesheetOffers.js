var grunt = require('grunt');

grunt.task.init = function() {};

grunt.initConfig({
    sprite: {
        all: {
            src: ['images/spritesheetSources/offers/*.png', 'images/spritesheetSources/offers/*.jpg', 'images/spritesheetSources/offers/*.gif'],
            destImg: 'images/spritesOffers.png',
            destCSS: 'Common/Spritesheets/_spritesOffers.scss',
            engine: 'phantomjs',
            algorithm: 'binary-tree',
            imgPath: '/iwov-resources/images/spritesOffers.png',
            padding: 1,
            cssVarMap: function (sprite) {
      		  sprite.name = 'offer_' + sprite.name;
            }
        }
    }
	
});

// Register your own tasks
grunt.registerTask('createSpritesheetOffers', function() {});

// Load tasks from npm
grunt.loadNpmTasks('grunt-spritesmith');

// Finally run the tasks, with options and a callback when we're done
grunt.tasks(['createSpritesheetOffers', 'sprite'], {}, function() {});