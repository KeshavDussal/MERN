const express = require("express");
const visitorController = require("../controllers/visitorController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new visitor (Protected)
router.post("/", authenticate, visitorController.createVisitor);

// Get all visitors (Protected)
router.get("/", authenticate, visitorController.getAllVisitors);

// Update visitor check-out (Protected)
router.put("/:id", authenticate, visitorController.updateVisitorCheckout);

module.exports = router;
