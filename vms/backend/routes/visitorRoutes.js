const express = require("express");
const visitorController = require("../controllers/visitorController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new visitor (Protected)
router.post("/", authenticate, visitorController.createVisitor);

module.exports = router;
