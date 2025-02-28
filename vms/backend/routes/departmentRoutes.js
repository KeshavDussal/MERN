const express = require("express");
const departmentController = require("../controllers/departmentController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new department (Protected)
router.post("/", authenticate, departmentController.createDepartment);

// Get all departments (Protected)
router.get("/", authenticate, departmentController.getAllDepartments);

// Delete a department (Protected)
router.delete("/:id", authenticate, departmentController.deleteDepartment);

module.exports = router;
