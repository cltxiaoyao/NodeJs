var http = require('http');
var url= require('url');

function serverStart(route,handle){
	http.createServer(function (req,res) {

		var pathname=url.parse(req.url).pathname;
		console.log('http request receive ' + pathname);

		/*var postData ="";
		req.setEncoding('utf8');
		req.addListener('data',function(postDataChunk){
			postData += postDataChunk;
			console.log("postDataChunk "+ postDataChunk);
		});
		req.addListener('end',function(postDataChunk){
			route(handle,pathname,res,postData);	
		});*/
		route(handle,pathname,res,req);	

		
	}).listen(3000,'127.0.0.1');

}

exports.serverStart=serverStart;