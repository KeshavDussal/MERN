const Visitor = require("../models/Visitor");
const Department = require("../models/Department");

exports.getDashboardSummary = async () => {
    const totalVisitors = await Visitor.countDocuments(); // Count all visitors
    const checkedInVisitors = await Visitor.countDocuments({ status: "In" }); // Count visitors still checked in
    const totalDepartments = await Department.countDocuments(); // Count all departments

    return { totalVisitors, checkedInVisitors, totalDepartments };
};
