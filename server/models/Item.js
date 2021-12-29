const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const itemSchema = new Schema({
  // TODO: add item object.
});

const Item = model("Item", itemSchema);

module.exports = Item;
