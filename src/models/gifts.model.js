// gifts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'gifts';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    title: { type: String },
    url: { type: String, maxlength: 500 },
    description: { type: String, maxlength: 150 },
    photo: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'files',
    },
    user: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
