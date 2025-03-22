const express = require("express");
const visitorController = require("../controllers/visitorController");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");

router.post("/", authenticate, visitorController.createVisitor);
router.get("/", authenticate, visitorController.getAllVisitors);
// Update visitor check-out (Protected)
router.put("/:id", authenticate, visitorController.updateVisitorCheckout);
// Search visitors (Protected)
router.get("/search", authenticate, visitorController.searchVisitors);



module.exports = router;