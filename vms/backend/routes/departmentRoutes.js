const express = require("express");
const departmentController = require("../controllers/departmentController");

const router = express.Router();

// Add a new department
router.post("/", departmentController.createDepartment);

module.exports = router;
