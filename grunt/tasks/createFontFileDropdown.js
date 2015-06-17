var fs = require('fs')
var readline = require('readline');
var stream = require('stream');

var fontFilePath = 'D:/lsds/content/iwov-resources/Common/_libertyIcons.scss';
var dropdownOutput = 'D:/lsds/content/_IT/iwadmin-livesite-config/dropdown/fontStyles.xml';
var styleClassArray = [];

var source = fs.createReadStream(fontFilePath);
var lineInterface = readline.createInterface(source, new stream);

lineInterface.on('line', function(line){
    line = line.trim();
    //find all lines starting with a decimal
    var regex = /^\./g;
    
    if(regex.exec(line) !== null){
        var colonIndex = line.indexOf(":");
        
        if(colonIndex !== -1){       
            styleClassArray.push(line.substring(1, colonIndex));
        }
    }
});

lineInterface.on('close', function() {
    var XMLWriter = require('xml-writer');
    var XMLFormatter = require('pretty-data').pd;

    x = new XMLWriter;
    x.startDocument('1.0', 'UTF-8');
    x.startElement('Options');
    x.startElement('Option');
    x.startElement('Display').text('None').endElement();
    x.startElement('Value').text('None').endElement();
    x.endElement();
    
    
    for(var i=0,j=styleClassArray.length; i<j; i++){
        x.startElement('Option');
        x.startElement('Display').text(styleClassArray[i]).endElement();
        x.startElement('Value').text(styleClassArray[i]).endElement();
        x.endElement();
    }
    
    x.endElement();
    x.endDocument();
    var formattedDoc = XMLFormatter.xml(x.toString());
    var ws = fs.createWriteStream(dropdownOutput);
    ws.write(formattedDoc);
    ws.end();
    console.log("The font styles dropdown has been updated in the following location: " + dropdownOutput);
});