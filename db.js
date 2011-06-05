var db = require('mongoose');

function setupModels()
{
  var Schema = db.Schema
    , ObjectId = Schema.ObjectId;

  var User = new Schema({
    id          : ObjectId,
    first_name  : String,
    last_name   : String,
    date_created : Date
  });
  
  db.model('User', User);
}

db.connect('mongodb://localhost/test');
setupModels();

module.exports = db;


