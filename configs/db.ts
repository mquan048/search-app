import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const DATABASE_URI = process.env.DATABASE_URI || "your database uri";

mongoose.connect(DATABASE_URI)
    .then(() => console.log("Connect database successfully!"));

