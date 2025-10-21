const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Debug: Check if environment variable is loaded
        console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Loaded' : 'NOT LOADED');
        
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;