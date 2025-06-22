const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    required: true,
    enum: ["Sweet", "Spicy", "Sour"],
  },
  is_drinkable: {
    type: Boolean,
    required: true,
    default: false,
  },
  ingredients: {
    type: [String],
    required: true,
    default: [],
  },
  num_sales: {
    type: Number,
    required: true,
    default: 0,
  },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);
module.exports = MenuItem;
