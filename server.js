PORT = 3000;

var fs = require('fs')
var express = require('express')
var app = express.createServer();
app.use(express.bodyParser());
app.set('view options', {
  layout: false
});

var db = require ('./db.js');
var User = db.model('User');
var UserLocation = db.model('UserLocation');
var EstablishmentLocation = db.model('EstablishmentLocation');

app.post('/user/create', function(req, res){
  new User(req.body).save(function(err){
    if (err == null)
      res.send('user saved successfully');
  });
});

app.post('/establishmentlocation/create', function(req, res) {
	new EstablishmentLocation(req.body).save(function(err) {
		if (err == null)
			res.send('Establishment saved successfully');
	});
});

app.get('/users.json', function(req, res)
{
  User.find({}, function(err, users){
    res.send(users); 
    console.log(users[0].FirstName);
    console.log(users[0].test_method());
  });
});

app.post('/check_in', function(req, res){
  UserLocation.find({user_id: req.body['user_id']}, function(err, location)
  {
    if (location.length == 0)
    {
      new UserLocation(req.body).save(function(err){
        if (err == null)
          res.send('first time logging location for this user.  done.');
      });
    }
    else
    {
      location[0].latitude = req.body['latitude'];
      location[0].longitude = req.body['longitude'];
      location[0].save
      
      res.send('updated user');
    }
      
  });
});


app.get('/test_page', function(req, res){
   res.render('test_page.jade')
 });
 
app.get('/test_client.js', function(req, res){
  res.header("Content-Type", "text/javascript");
  res.send(fs.readFileSync('test_client.js'));
});

app.listen(PORT);

