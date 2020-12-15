const { authenticate } = require('@feathersjs/authentication').hooks;
const uploadFiles = require('../../hooks/upload-file');
const adduser = require('../../hooks/addUser');

module.exports = {
  before: {
    all: [authenticate('jwt'), adduser()],
    find: [],
    get: [],
    create: [uploadFiles()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
