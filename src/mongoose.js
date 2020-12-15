const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  console.log(app.get('mongodb'));
  mongoose.connect(
    app.get('mongodb'),
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true  }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set('mongooseClient', mongoose);
};
