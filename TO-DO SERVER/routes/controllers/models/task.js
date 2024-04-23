// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Please provide a title"],
//   },
//   description: {
//     type: String,
//     required: [true, " Please provide a description"],
//   },
//   tags: {
//     type: String,
//     required: [true, " Please provide a tag"],
//   },
// });

// export default mongoose.model("Task", taskSchema);

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  tags: {
    type: String,
    required: [true, "Please provide a tags"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Task", taskSchema);
