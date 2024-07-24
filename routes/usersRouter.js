const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const userMOdel = require("../models/user-model");
// const jwt = require("jsonwebtoken");
// const {generateToken}= require("../utils/generateToken")
const {registerUser, loginUser, logout } = require("../controllers/authController")

router.get("/", (req, res) => {
  res.send("hey");
});
router.post("/register", registerUser);
router.post("/login", loginUser)

// router.post("/login", loginUser)
module.exports = router;
