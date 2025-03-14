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

exports.deleteDepartment = async (id) => {
    const department = await Department.findById(id);
    if (!department) throw new Error("Department not found");
    await Department.findByIdAndDelete(id)
    return { message: "Department deleted successfully" };
};