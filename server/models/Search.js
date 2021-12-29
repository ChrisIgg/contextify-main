const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const searchSchema = new Schema({
  // TODO: add model object
});

const Search = model("Search", searchSchema);

module.exports = Search;
