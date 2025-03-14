const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router(); // Register Admin 
router.post("/register", authController.register);
// Login Admin 
router.post("/login", authController.login);
module.exports = router;
