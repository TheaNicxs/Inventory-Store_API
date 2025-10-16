// controllers/productController.js
const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Very simple deductStock
exports.deductStock = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Convert to numbers to ensure they are valid
    const deductQuantity = Number(quantity);
    
    if (isNaN(deductQuantity) || deductQuantity <= 0) {
      return res.status(400).json({ error: 'Invalid quantity' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Ensure stock is a number
    const currentStock = Number(product.stock) || 0;
    
    if (currentStock < deductQuantity) {
      return res.status(400).json({ error: 'Not enough stock' });
    }

    // Update using atomic operation
    await Product.findByIdAndUpdate(productId, {
      $inc: { stock: -deductQuantity }
    });

    // Get updated product
    const updatedProduct = await Product.findById(productId);
    
    res.json({
      success: true,
      product: updatedProduct,
      message: `Stock deducted. Remaining: ${updatedProduct.stock}`
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};