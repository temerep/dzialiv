const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  img: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  }
}, { strict: false, timestamps: true });


module.exports = mongoose.model("category", categorySchema);
