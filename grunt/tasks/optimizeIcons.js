var XmlDocument = require('xmldoc').XmlDocument;
var fs = require('fs');
var svgPath = 'D:/lsds/content/iwov-resources/libertyIconSVGs';

fs.readdir(svgPath, function(err, svgFiles){
	svgFiles.filter(function(fileName){
		return fileName.substr(-4) == '.svg';
	})
	.forEach(function(fileName){	
		var data;
		
		try{
			data = fs.readFileSync(svgPath+"/"+fileName, 'utf8');
			if(undefined != data && data.length > 0){
				parseFile(fileName, data);
			}
		}catch(e){
			console.log(e);
		}
	});
});

function parseFile(fileName, data){
	var results = new XmlDocument(data);
	
	if(fileName.length > 5){
		if(fileName.substr(0, 5) !== "text-"){
			results.attr.height = "44";
			results.attr.width = "44";
		}
	}else{
		results.attr.height = "44";
		results.attr.width = "44";
	}
	
	
	var ws = fs.writeFileSync(svgPath + '/' + fileName, results);
}