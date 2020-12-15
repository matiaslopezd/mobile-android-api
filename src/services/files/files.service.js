// Initializes the `files` service on path `/files`
const path = require('path');
const createModel = require('../../models/files.model');
const hooks = require('./files.hooks');
const createService = require('feathers-mongoose');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { BadRequest } = require('@feathersjs/errors');

function fileFilter(req, file, callback) {
  const ext = path.extname(file.originalname);
  const allowed = ['.png', '.jpg', '.jpeg'];
  if(!allowed.includes(ext.toLowerCase())) return callback(new BadRequest('Only images are allowed'));
  callback(null, true);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext.toLowerCase());
  }
});
const multipartMiddleware = multer({ storage, fileFilter });

module.exports = function (app) {
  const options = {
    name: 'files',
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/files',
    multipartMiddleware.single('img'),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    createService(options),
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('files');
  service.hooks(hooks);
};
