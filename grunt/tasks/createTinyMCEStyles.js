var grunt = require('grunt');

grunt.task.init = function() {};
grunt.initConfig({
    sass: {
        all: {
            options: {
                compass: true,
                style: 'expanded',
            },
            files: [{
	            expand: true,
	            cwd: 'grunt',
	            src: ['**/*.scss'],
	            dest: 'grunt',
	            ext: '.css'
	        },]
        }
    }
});

grunt.registerTask('compileTinyMceStyles', function() {});
grunt.loadNpmTasks('grunt-sass');

var fs = require('fs')
var readline = require('readline');
var stream = require('stream');

var stylesCSS = 'D:/lsds/content/iwov-resources/grunt/tasks/config/tinyMceStyles/dropdownStyles.css';
var outputLocation = 'D:/lsds/content/_IT/iwadmin-livesite-config/tinyMceStyles/';
var contentCssFile = outputLocation + "content.css";
var stylesCssFile = outputLocation + "styleGuide.css";
var contentImport = "@import url('/iw-mount/iwadmin/main/livesite/config/STAGING/styleguide/styleGuide.css');";
var styleClassArray = [];
var styleOutput = "";
var lineInterface;
var source = fs.createReadStream(stylesCSS);

source.on('error', function(){
    fileExists = false;
    grunt.tasks(['compileTinyMceStyles', 'sass'], {}, function(){
        lineInterface = readline.createInterface(source, new stream);
        readSourceCssFile();
    });
    
});

source.on('open', function(){
    lineInterface = readline.createInterface(source, new stream);
    readSourceCssFile();
});

function readSourceCssFile(){    
    lineInterface.on('line', function(line){
        line = line.trim();
        
        //find all lines starting with a decimal
        var regex = /^\./g;
        
        if(regex.exec(line) !== null){
            var colonIndex = line.indexOf(":");
            
            if(colonIndex === -1){
                var bracketIndex = line.indexOf(" {");
                
                if(bracketIndex !== -1){
                    var className = line.substring(1, bracketIndex);
                    
                    if(className.indexOf(" ") === -1){
                        styleClassArray.push(className);
                        styleOutput += ".lmcustomSkin .mceMenu span.mceText[title='" + className + "'],\n";
                    }
                }
            }
            
            styleOutput += line + "\n";
        }else{
            var semiColonIndex = line.indexOf(";");
            var commentsIndex = line.indexOf("/*");
            
            if(line.length > 0 && commentsIndex !== 0){
                if(semiColonIndex+1 === line.length){
                    styleOutput += line.substring(0, semiColonIndex) + " !important;\n";
                }else if(semiColonIndex+1 === line.length-2){
                    styleOutput += line.substring(0, semiColonIndex) + " !important; }\n\n";
                }else{
                    styleOutput += line + "\n";
                }
            }
        }
    });
    
    writeCssFiles();
}

function writeCssFiles(){
    lineInterface.on('close', function() {
        var output = contentImport + "\n\n";
        
        for(var i=0,j=styleClassArray.length; i<j; i++){
            output += "." + styleClassArray[i];
            
            if(i+1 === j){
                output += "{};";
            }else{
                output += ",\n";
            }
        }
        
        var writeStreamContentFile = fs.createWriteStream(contentCssFile);
        writeStreamContentFile.write(output);
        writeStreamContentFile.end();
        console.log("The content css file has been updated in the following location: " + contentCssFile);
        
        var writeStreamStylesFile = fs.createWriteStream(stylesCssFile);
        writeStreamStylesFile.write(styleOutput);
        writeStreamStylesFile.end();
        console.log("The styles css file has been updated in the following location: " + stylesCssFile);
    });
}