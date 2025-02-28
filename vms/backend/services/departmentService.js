const Department = require("../models/Department");

exports.createDepartment = async ({ name }) => {
    if (!name) throw new Error("Department name is required");

    const existingDept = await Department.findOne({ name });
    if (existingDept) throw new Error("Department already exists");

    const department = new Department({ name });
    await department.save();

    return { message: "Department created successfully", department };
};

exports.getAllDepartments = async () => {
    const departments = await Department.find();
    return departments;
};

exports.deleteDepartment = async (id) => {
    const department = await Department.findById(id);
    if (!department) throw new Error("Department not found");

    await Department.findByIdAndDelete(id);

    return { message: "Department deleted successfully" };
};