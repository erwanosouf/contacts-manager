var conf = require('./config').db,
    mongoose = require('mongoose');

// Exports the function building the db.
module.exports = function() {

  // Connection URL
  var url = conf.url;
  delete conf.url;

  // Set default Promise
  mongoose.Promise = global.Promise;

  return mongoose.connect(url, conf);
};
