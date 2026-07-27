import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DB_CONNECTION;


export const connectDB = ()=>{
mongoose.connect(DB_URL).then(() => console.log(`Database connect`));
}



