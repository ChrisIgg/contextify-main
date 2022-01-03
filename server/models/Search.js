const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const searchSchema = new Schema({
  // TODO: add model object
  // Mongoose should autogenerate id
  // id: {
  //   type: Number,
  //   required: false,
  //   // primaryKey: true,
  //   // autoIncrement: true,
  // },
  name: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
  },
  fieldA: {
    type: Number,
    required: true,
  },
  fieldB: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Search = model("Search", searchSchema);

module.exports = Search;
