var db = module.exports = require('mongoose');

db.connect('mongodb://localhost/test');

(function setupModels()
{
  var Schema = db.Schema,
      ObjectId = Schema.ObjectId;

  var UserLocation = new Schema({
    user_id     : ObjectId,
    latitude    : Number,
    longitude   : Number
  });

  var EstablishmentLocation = new Schema({
	establishment_id :ObjectId,
	address          : String,
	latitude         : Number,
	longitude		 : Number,
	date_created     : Date
  });

  var User = new Schema({
    id          : ObjectId,
    first_name  : String,
    last_name   : String,
    date_created : Date,
	last_login : Date
  });

  
  EstablishmentLocation.virtual('Address')
	.get( function() {
		return EstablishmentLocation.address;
	});
	
  EstablishmentLocation.virtual('Latitude')
	.get( function () {
		return EstablishmentLocation.latitude;
	});

  User.virtual('FirstName')
    .get( function() {
      return User.first_name;
    });
    
  User.method('test_method', function() {
    return 'yo i am a test method'
  });
  
  db.model('UserLocation', UserLocation);
  db.model('EstablishmentLocation', EstablishmentLocation);
  db.model('User', User);
})();





