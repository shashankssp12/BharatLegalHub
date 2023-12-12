// Connect to MongoDB

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {   
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;