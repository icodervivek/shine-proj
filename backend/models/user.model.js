const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required."],
    },
    mobile_number: {
      type: Number,
      required: [true, "Mobile number is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address.",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    pincode: {
      type: Number,
      required: [true, "Pin code is required."],
    },
    post_office: {
      type: String,
      required: [true, "Post office is required."],
    },
    district: {
      type: String,
      required: [true, "District is required."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const user = mongoose.model("User", studentSchema);

module.exports = user;
