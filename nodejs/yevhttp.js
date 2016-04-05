var http = require('http');
var mongoose = require('mongoose');
var User = require('./User');

var chris = new User({
    name : 'Chris',
    username : 'sevilayha',
    password : 'password',
});

chris.dudify(function(err,name) {
    if (err) throw err;
    console.log('your new name is ' + name);
});


chris.save(function(err,name) {
    if (err) throw err;
    console.log('User saved successfully!');
});
    
mongoose.connect('mongodb://localhost/myappdatabase');

function doit(req){
  console.log(req)
}

var server = http.createServer(function(req, res) {
  doit(req)
  res.writeHead(200);
  res.end('Hello Http\n');
});
server.listen(8080);

