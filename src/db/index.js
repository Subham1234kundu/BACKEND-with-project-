import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected DB_HOST:${mongoose.connection.host}`);
  } catch (err) {
    console.log("MONGO DB CONNECTION ERROR", err);
    process.exit(1);
  }
};

export default connectDB;