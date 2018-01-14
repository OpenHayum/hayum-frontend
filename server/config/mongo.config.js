const mongoose = require('mongoose');
const debug = require('debug')('HAYUM: mongo.config');
const hayumConfig = require('./hayum.config');

module.exports = () => {
  mongoose.connect(hayumConfig.dbTestUri, (error) => {
    if (error) {
      debug(error);
    }
    debug('Mongoose connection established');
  });
};
