const departmentService = require("../services/departmentService");

exports.createDepartment = async (req, res) => {
    try {
        const response = await departmentService.createDepartment(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await departmentService.getAllDepartments();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const response = await departmentService.deleteDepartment(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};