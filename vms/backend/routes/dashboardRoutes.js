const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");

router.get("/", authenticate, dashboardController.getDashboardSummary);

module.exports = router;