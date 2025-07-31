const mongoose = require('mongoose');
const { Schema } = mongoose;
const userInfoSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  phone: String,
  address: String,
  linkedin: String,
  github: String,
  resumeLink: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = userInfoSchema;