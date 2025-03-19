const mongoose = require("mongoose");
const Visitor = require("../models/Visitor");
const Department = require("../models/Department");

exports.createVisitor = async ({ name, phone, age, department, purpose }) => {
    if (!name || !phone || !age || !department || !purpose) throw new Error("All fields are required")
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(department)) {
        throw new Error("Invalid Department ID");
    }
    const dept = await Department.findById(department);
    if (!dept) throw new Error("Invalid Department")

    const visitor = new Visitor({ name, phone, age, department, purpose });
    await visitor.save();
    return { message: "Visitor Entry Created", visitor };
};

exports.getAllVisitors = async () => {
    const visitors = await Visitor.find();
    return visitors;
};