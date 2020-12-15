const users = require('./users/users.service.js');
const birthdays = require('./birthdays/birthdays.service.js');
const gifts = require('./gifts/gifts.service.js');
const contacts = require('./contacts/contacts.service.js');
const files = require('./files/files.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(birthdays);
  app.configure(gifts);
  app.configure(contacts);
  app.configure(files);
};
