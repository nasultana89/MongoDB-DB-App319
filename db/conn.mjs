import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// config mongoURI
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// mongoConnect 
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

export default db;