const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10}$/, // Example: Enforces a 10-digit phone number
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/, // Basic email validation
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
