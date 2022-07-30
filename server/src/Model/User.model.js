import mongoose from "mongoose";

/**
 * User Model DB Schema
 */
export default mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  })
);
