const express = require("express");
const visitorController = require("../controllers/visitorController");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");

router.post("/", authenticate, visitorController.createVisitor);
router.get("/", authenticate, visitorController.getAllVisitors);
// Update visitor check-out (Protected)
router.put("/:id", authenticate, visitorController.updateVisitorCheckout);


module.exports = router;