require('dotenv').config();

const express = require('express'); 
const connectDB = require('./config/db');

const app = express();

app.use(express.json()); 
app.use('/api', require('./routes/productRoutes')); 
app.use('/api', require('./routes/orderRoutes')); 
app.use('/api', require('./routes/supplierRoutes'));

connectDB();

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));