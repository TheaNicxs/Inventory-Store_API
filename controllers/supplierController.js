// controllers/supplierController.js
const Supplier = require('../models/Supplier');

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: suppliers.length,
      data: suppliers
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Get single supplier
exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    
    if (!supplier) {
      return res.status(404).json({ 
        success: false,
        error: 'Supplier not found' 
      });
    }

    res.json({
      success: true,
      data: supplier
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Create supplier
exports.createSupplier = async (req, res) => {
  try {
    // Clean phone number - remove any non-digit characters except +
    if (req.body.contact && req.body.contact.phone) {
      req.body.contact.phone = req.body.contact.phone.toString().trim();
    }

    const supplier = new Supplier(req.body);
    await supplier.save();
    
    res.status(201).json({
      success: true,
      data: supplier
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Update supplier
exports.updateSupplier = async (req, res) => {
  try {
    // Clean phone number if provided
    if (req.body.contact && req.body.contact.phone) {
      req.body.contact.phone = req.body.contact.phone.toString().trim();
    }

    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!supplier) {
      return res.status(404).json({ 
        success: false,
        error: 'Supplier not found' 
      });
    }

    res.json({
      success: true,
      data: supplier
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Delete supplier
exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);

    if (!supplier) {
      return res.status(404).json({ 
        success: false,
        error: 'Supplier not found' 
      });
    }

    res.json({
      success: true,
      message: 'Supplier deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};