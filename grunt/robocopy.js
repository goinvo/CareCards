module.exports = {
    options: {
        copy: {
            subdirs: true,
            dirTimestamps: true,
            info: 'DAT',
            fixTimes: true,
            multiThreaded: true,
            mirror: true
        }       
    },
	//Prod build only settings
    fonts: {
        options: {
            source: 'fonts',
            destination: '_build/fonts',
            file: {
                excludeDirs: ['_IT']
            }
        }
    },
    images: {
        options: {
            source: 'images',
            destination: '_build/images',
            file: {
            	excludeDirs: [
					'_IT', 
					'spritesheetSources'
                ]
            }
        }
    },
    messageBundles: {
        options: {
            source: 'messageBundles',
            destination: '_build/messageBundles',
            file: {
                excludeDirs: ['_IT']
            }
        }
    },
    common: {
        options: {
            source: 'Common',
            destination: '_build/Common',
            files: [
                '*.js',
				'*.json',
				'*.xml',
				'*.xsl',
			],
			file: {
                excludeDirs: [
                    '_IT',
                    'PatternLibrary',
                    'Spritesheets'
                ]
            }
        }
    },
	components: {
        options: {
            source: 'Components',
            destination: '_build/Components',
            files: [
				'*.js',
				'*.json',
				'*.xml',
				'*.xsl',
			],
            file: {
                excludeDirs: ['_IT']
            }
        }
    },
	//shared settings
    canvas: {
        options: {
            source: 'Canvas',
            destination: '_build/Canvas',
            files: [
				'*.js',
				'*.xml',
				'*.xsl',
			]
        }
    },
	customconfiguration: {
        options: {
            source: 'customconfiguration',
            destination: '_build/customconfiguration',
            files: [
				'*.xml'
			]
        }
    },
	sites: {
        options: {
            source: 'Sites',
            destination: '_build/Sites',
            files: [
				'*.js',
				'*.xml',
				'*.xsl',
			]
        }
    },
	//dev build settings
    commonDev: {
        options: {
            source: 'Common',
            destination: '_build/Common',
            files: [
				'*.js',
				'*.json',
				'*.xml',
				'*.xsl',
			],
			file: {
                excludeDirs: [
                    'PatternLibrary',
                    'Spritesheets'
                ]
            }
        }
    },
	componentsDev: {
        options: {
            source: 'Components',
            destination: '_build/Components',
            files: [
				'*.js',
				'*.json',
				'*.xml',
				'*.xsl',
			]
        }
    },
	IT: {
        options: {
            source: '_IT',
            destination: '_build/_IT',
            files: [
				'*.js',
				'*.json',
				'*.xml',
				'*.xsl',
			],
			file: {
				excludeFiles: [
					'_TEMPLATE.*'
				],
                excludeDirs: [
					'compass',
					'JunitTestData'
				]
            }
        }
    },
    fontsDev: {
        options: {
            source: 'fonts',
            destination: '_build/fonts'
        }
    },
    imagesDev: {
        options: {
            source: 'images',
            destination: '_build/images',
        	file: {
                excludeDirs: ['spritesheetSources']
            }
        }
    },
    messageBundlesDev: {
        options: {
            source: 'messageBundles',
            destination: '_build/messageBundles'
        }
    },
    jspDev: {
        options: {
            source: 'jsp',
            destination: '_build/jsp'
        }
    }
}