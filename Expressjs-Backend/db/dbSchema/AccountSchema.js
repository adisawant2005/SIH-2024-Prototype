const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for account details
const accountSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure the email is unique across the collection
      trim: true,
      lowercase: true, // Convert email to lowercase
      match: [
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Please enter a valid email address",
      ], // Email validation regex
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length of password
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "non-binary", "other"], // Allowed values for gender
      required: true,
    },
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    streetAddress: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^\d{10}$/, "Please enter a valid phone number"], // Phone number validation regex
    },
    birthdate: {
      type: Date,
      required: true,
    },
    profilePictureAddress: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
); // Add createdAt and updatedAt timestamps

// Create a model from the schema
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
