const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const itemSchema = new Schema({
  // TODO: add item object.
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  mass: {
    type: Number,
    required: true,
  },
  diameter: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
