require('dotenv').config();

const express = require('express'); 
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

const app = express();

app.use(express.json()); 
app.use('/api', productRoutes); 
app.use('/api', orderRoutes); 
app.use('/api', supplierRoutes);

connectDB();

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));