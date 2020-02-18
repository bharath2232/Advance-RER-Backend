const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const config = mongoose.connect('mongodb://5.189.183.40:27017/rerbackend?retryWrites=true',{ useNewUrlParser: true ,useUnifiedTopology: true });

module.exports = config;
