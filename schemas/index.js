const schemas = {
  notification: {
    title: { type: String, required: true },
    content: { type: String, default: '' },
    severty: String,
    date: { type: Date, default: Date.now },
  },
};

module.exports = schemas;
