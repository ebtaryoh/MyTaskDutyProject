// import express from "express";
// import {
//   getUser,
//   registerUser,
//   signInUser,
// } from "./controllers/authController.js";
// import methodNotAllowed from "./utils/methodNotAllowed.js";
// import auth from "../middlewares/auth.js";

// const router = express.Router();

// router.route("/").get(auth, getUser).all(methodNotAllowed);
// router.route("/register").post(registerUser).all(methodNotAllowed);
// router.route("/signin").post(signInUser).all(methodNotAllowed);

// export default router;

const express = require("express");
const {
  registerUser,
  signinUser,
  getUser,
} = require("./controllers/authController.js");
const methodNotAllowed = require("./utils/methodNotAllowed.js");
const router = express.Router();
const auth = require("../middlewares/auth.js");

router.route("/").get(auth, getUser).all(methodNotAllowed);
router.route("/register").post(registerUser).all(methodNotAllowed);
router.route("/signin").post(signinUser).all(methodNotAllowed);

module.exports = router;
