// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const connectDB = require('./config/db'); 

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/orderRoutes'));
app.use('/api', require('./routes/supplierRoutes'));

dotenv.config(); 
connectDB(); 

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});