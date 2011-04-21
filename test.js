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

var net = require('net');

var server = net.createServer(function (socket) {
  socket.write("Connected\r\n");
  socket.on("data", function (data) {
    var post = new myModel();
    post.body = data
    post.save(function(err)
    {
      console.log("Saved: " + data)
      socket.write("Saved: " + data + "\0");  
      myModel.find({}, function (err, docs) {
        console.log(docs.length);
      });
    });
  });
})

server.listen(8124, "127.0.0.1");



