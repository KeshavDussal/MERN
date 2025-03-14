const express = require("express");
const departmentController = require("../controllers/departmentController");
const router = express.Router(); // Register Admin 
const { authenticate } = require("../middleware/authMiddleware");

router.post("/", authenticate, departmentController.createDepartment);
router.get("/", authenticate, departmentController.getAllDepartments);

module.exports = router;