import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MongoDb Url not found");
  if (isConnected) return console.log("Already connected to database");

  //if not connected to database then connect to database
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to DB");
  } catch (error: any) {
    console.error(error);
  }
};
