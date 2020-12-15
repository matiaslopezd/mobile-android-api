// Initializes the `birthdays` service on path `/birthdays`
const { Birthdays } = require('./birthdays.class');
const createModel = require('../../models/birthdays.model');
const hooks = require('./birthdays.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/birthdays', new Birthdays(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('birthdays');

  service.hooks(hooks);
};
