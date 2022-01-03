const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const itemSchema = new Schema({
  // TODO: add item object.
  itemName: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  mass: {
    type: Number,
    required: false,
  },
  diameter: {
    type: Number,
    required: false,
  },
  distance: {
    type: Number,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
