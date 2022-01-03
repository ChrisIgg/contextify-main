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
  searchName: {
    type: String,
    // required: true,
    // trim: true,
  },
  fieldA: {
    type: Number,
    required: true,
  },
  // must add Unit A

  fieldB: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    // must add Unit B
  ],
});

const Search = model("Search", searchSchema);

module.exports = Search;
