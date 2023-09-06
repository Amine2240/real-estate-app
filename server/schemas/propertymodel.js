const mongoose = require("mongoose");

const Propertyschema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  facilities: {
    type: Array,
    required: true,
  },
  likedelement: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Propertymodel = mongoose.model("property", Propertyschema);
module.exports = Propertymodel;
