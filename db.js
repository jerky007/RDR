var db = require('mongoose');

function setupModels()
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
  
  db.model('Location', Location);
  db.model('User', User);
}

db.connect('mongodb://localhost/test');
setupModels();

module.exports = db;


