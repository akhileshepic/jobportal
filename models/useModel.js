import mongoose from "mongoose";
import validator from "validator";
//Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Require"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Require"],
      unique: true,
      validate: validator.isEmail,
    },
    email: {
      type: String,
      required: [true, "Password is Require"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timeseries: true }
);

export default mongoose.model("User", userSchema);
