function route(handle,pathname,response,request){
	console.log('route a request ' + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname](response,request);
	}
	else{
		console.log('no request handle found for'+pathname);
		response.writeHead(404,{'Content-Type':'text/html'});
		response.write("404 not found");
		response.end('');
	}

}

exports.route = route;