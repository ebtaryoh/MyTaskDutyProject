// import express from "express";
// import {
//   everyTasks,
//   createTask,
//   singleTask,
//   updateTask,
//   deleteTask,
// } from "./controllers/taskController.js";
// import methodNotAllowed from "./utils/methodNotAllowed.js";

// const router = express.Router();

// router.route("/").get(everyTasks).post(createTask).all(methodNotAllowed);
// router.route("/:id").get(singleTask).patch(updateTask).delete(deleteTask).all(methodNotAllowed);

// export default router;

const express = require("express");
const {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./controllers/taskController.js");
const methodNotAllowed = require("./utils/methodNotAllowed.js");
const auth = require("../middlewares/auth.js");
const router = express.Router();

router
  .route("/")
  .get(auth, allTasks)
  .post(auth, createTask)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(auth, singleTask)
  .patch(auth, updateTask)
  .delete(auth, deleteTask)
  .all(methodNotAllowed);

module.exports = router;
