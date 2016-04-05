var restify = require('restify');  
var server = restify.createServer();
server.use(restify.bodyParser());

function getMessages(req,res,next) {
  res.send('Hello There!')
}

server.get('/', getMessages);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
