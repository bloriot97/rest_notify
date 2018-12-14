const schemas = {
  notification: {
    title: { type: String, required: true },
    content: { type: String, default: '' },
    severty: String,
    date: { type: Date, default: Date.now },
    from: { type: String },
    to: { type: String, required: true },
    email: { type: String },
  },
  user: {
    token: { type: String, required: true, unique: true },
    secret: { type: String, required: true },
    email: { type: String, required: true },
  },
};

module.exports = schemas;
