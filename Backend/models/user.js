// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: { type: String, enum: ['SuperAdmin', 'Teacher', 'Student'] },
//   status: { type: String, default: 'Pending' }, // Pending, Accepted, Rejected
//   requestType: { type: String, enum: ['Teacher', 'Student'], default: 'Student' }, // This field indicates the request type
// });

// module.exports = mongoose.model('User', userSchema);


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['SuperAdmin', 'Teacher', 'Student'] },
  status: { type: String, default: 'Pending' }, // Pending, Accepted, Rejected
  // requestType: { type: String, enum: ['Teacher', 'Student'], default: 'Student' }, // This field indicates the request type
});

// Check if the model has already been compiled
export default mongoose.model('User', userSchema);
