"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userEmail: { type: "String", required: true }, // unique id
  userPassword: { type: "String", required: true },
  userShows: { type: "Show[]", required: true },
});

module.exports = mongoose.model("User", UserSchema);
