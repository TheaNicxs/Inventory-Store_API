// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String,},
  name: { type: String,required: true},
  price: { type: Number,default: 0, min: 0 },
  stock: { type: Number,default: 0, min: 0 }
});

module.exports = mongoose.model('Product', productSchema);