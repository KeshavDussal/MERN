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

exports.getAllVisitors = async () => {
    return await Visitor.find().populate("department", "name"); // Populate department name
};

exports.updateVisitorCheckout = async (id) => {
    const visitor = await Visitor.findById(id);
    if (!visitor) throw new Error("Visitor not found");

    if (visitor.status === "Out") throw new Error("Visitor has already checked out");

    visitor.checkOutTime = new Date();
    visitor.status = "Out";
    await visitor.save();

    return { message: "Visitor checked out successfully", visitor };
};

exports.searchVisitors = async (query) => {
    if (!query) throw new Error("Search query is required");

    const visitors = await Visitor.find({
        $or: [
            { name: { $regex: query, $options: "i" } }, // Case-insensitive name search
            { phone: { $regex: query, $options: "i" } } // Case-insensitive phone search
        ]
    }).populate("department", "name"); // Populate department name

    return visitors;
};