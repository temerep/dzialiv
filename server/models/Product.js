const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  pricelist: {
    type: String,
    required: false
  }
}, { strict: false, timestamps: true });


module.exports = mongoose.model("product", productSchema);
