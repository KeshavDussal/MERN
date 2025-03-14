const Department = require("../models/Department");
exports.createDepartment = async ({ name }) => {
    if (!name) throw new Error("Department name is required")
    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) throw new Error("Department already exists");

    const department = new Department({ name });
    await department.save();
    return { message: "Department Created", department };
};

exports.getAllDepartments = async () => {
    const departments = await Department.find();
    return departments;
};