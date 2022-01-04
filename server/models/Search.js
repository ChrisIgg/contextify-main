const { model } = require("mongoose");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
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

  fieldB: {
    type: String,
  },
  // fieldB: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Item",
  //   },
  // ],

});

const Search = model("Search", searchSchema);

module.exports = Search;
