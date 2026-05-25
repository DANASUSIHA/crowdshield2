const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  emergency: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }

});

module.exports = mongoose.model(
  "HelpRequest",
  userSchema
);