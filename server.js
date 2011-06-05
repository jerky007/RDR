var fs = require('fs')
var express = require('express')
var app = express.createServer();
app.use(express.bodyParser());
app.set('view options', {
  layout: false
});

var db = require ('./db.js');
var User = db.model('User');

app.post('/user/create', function(req, res){
  new User(req.body).save(function(err){
    res.send('user saved successfully');
  });
});

app.get('/users.json', function(req, res)
{
  UserModel.find({}, function(err, users){
   res.send(users); 
  });
});

app.get('/test_page', function(req, res){
   res.render('test_page.jade')
 });
 
app.get('/test_client.js', function(req, res){
  res.header("Content-Type", "text/javascript");
  res.send(fs.readFileSync('test_client.js'));
});

app.listen(3000);

