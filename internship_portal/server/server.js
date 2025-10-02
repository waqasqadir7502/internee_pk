import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

// DOTENV Config
dotenv.config();

// App initiation and middleware
const app = express();

app.use(cors());
app.use(express.json());

//MongoDB / Mongoose
const uri = process.env.MONGODB_URL;

mongoose.connect(uri);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected");
}); 

// Server Runner
app.listen(3001, () => {
  console.log("This Server is Running fine!");
});
