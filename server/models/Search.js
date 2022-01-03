const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const searchSchema = new Schema({
  // TODO: add model object
  id: {
    type: Number,
    required: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  fieldA: {
    type: String,
    required: true,
  },
  fieldB: [
    {
      type: String,
      ref: "Item",
    },
  ],
});

const Search = model("Search", searchSchema);

module.exports = Search;
