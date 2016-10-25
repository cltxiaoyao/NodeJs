var server = require('./server');
var route = require('./route.js');
var requestHandler = require('./requestHandler.js');

var handler = {};
handler['/']=requestHandler.start;
handler['/start']=requestHandler.start;
handler['/upload']=requestHandler.upload;
handler['/show']=requestHandler.show;

server.serverStart(route.route,handler);