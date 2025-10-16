// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/orderRoutes'));
app.use('/api', require('./routes/supplierRoutes'));

// MongoDB connection
mongoose.connect('mongodb+srv://TheaNicxs:Thea1205@softwareengineering.fhbnkku.mongodb.net/?retryWrites=true&w=majority&appName=SoftwareEngineering')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});