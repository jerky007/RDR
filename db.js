var db = module.exports = require('mongoose');

db.connect('mongodb://localhost/test');

(function setupModels()
{
  var Schema = db.Schema
    , ObjectId = Schema.ObjectId;

  var Location = new Schema({
    user_id     : ObjectId,
    latitude    : Number,
    longitude   : Number
  });

  var User = new Schema({
    id          : ObjectId,
    first_name  : String,
    last_name   : String,
    date_created : Date
  });
  
  User.virtual('test_property')
    .get( function() {
      return 'test property value';
    });
    
  User.method('test_method', function() {
    return 'yo i am a test method'
  });
  
  db.model('Location', Location);
  db.model('User', User);
})();





