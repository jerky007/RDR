require.paths.unshift('support/mongoose/lib')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , date      : Date
});

var myModel = mongoose.model('BlogPost', BlogPost);
var instance = new myModel();
instance.author = 'andy';
instance.save(function (err) {
  console.log("Saved");
});

myModel.find({}, function (err, docs) {
  console.log(docs.length);
});

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');



