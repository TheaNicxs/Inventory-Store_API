const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  contact: {
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true }
  }
});

module.exports = mongoose.model('Supplier', supplierSchema);