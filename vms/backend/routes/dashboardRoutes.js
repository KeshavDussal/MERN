const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Get dashboard summary (Protected)
router.get("/", authenticate, dashboardController.getDashboardSummary);

module.exports = router;
