var exec=require("child_process").exec;
var querystring = require("querystring");
fs = require("fs");
formidable = require("D:/应用软件/node_modules/formidable");

function start(response,request){
	console.log("request Handler 'start' was called");
	/*function sleep(milliSeconds){
		var startTime= new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);*/

	/*var content = "empty";
	return content;*/
	/*exec("ls-lah",function(error,stdout,stderr){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(stdout);
		response.end('');	
	});*/

	var body = '<html>'+'<head>'+'<body>'+'<form action="/upload" method="post" enctype="multipart/form-data">'+
	'<input type="file" name="upload"><input type="submit" value="upload file"/>'+'</form></body></html>';
    response.writeHead(200,{'Content-Type':'text/html'});
	response.write(body);
	response.end('');	
	
}

function upload(response,request){
	console.log("request Handler 'upload' was called");

	var form = new formidable.IncomingForm();
	form.uploadDir="./upload";
	form.parse(request,function(error,fields,files){

		console.log("path = "+files.upload.path);
		fs.renameSync(files.upload.path,"./images/test.jpg");
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write("image:<br>");
		response.write("<image src='/show'/>");
		response.end('');	
	

	});
	/*response.writeHead(200,{'Content-Type':'text/html'});
	response.write("you are sent:" + querystring.parse(postData).text);
	response.end('');	*/
}

function show(response,request){
	console.log("request Handler 'show' was called");
	fs.readFile("./images/test.jpg","binary",function(error,file){
		if(error){
			response.writeHead(500,{'Content-Type':'text/html'});
			response.write(error+"\n");
			response.end('');		
		}
		else{
			response.writeHead(200,{'Content-Type':'image/png'});
			response.write(file,"binary");
			response.end('');	
		}
	})
}

exports.start=start;
exports.upload=upload;
exports.show=show;