// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { BadRequest } = require('@feathersjs/errors');

module.exports = () => {
  return async context => {
    const {file} = context.params;
    const {mimetype, filename} = file;

    if (!file) throw new BadRequest('No file found to upload.');

    context.data.name = filename;
    context.data.contentType = mimetype;

    return context;
  };
};
