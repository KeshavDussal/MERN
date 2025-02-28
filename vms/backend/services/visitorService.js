const Visitor = require("../models/Visitor");
const Department = require("../models/Department");

exports.createVisitor = async ({ name, phone, department, purpose }) => {
    if (!name || !phone || !department || !purpose) {
        throw new Error("All fields are required");
    }

    const dept = await Department.findById(department);
    if (!dept) throw new Error("Invalid department");

    const visitor = new Visitor({ name, phone, department, purpose });
    await visitor.save();

    return { message: "Visitor added successfully", visitor };
};
