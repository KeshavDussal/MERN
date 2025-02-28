const dashboardService = require("../services/dashboardService");

exports.getDashboardSummary = async (req, res) => {
    try {
        const summary = await dashboardService.getDashboardSummary();
        res.status(200).json(summary);
    } catch (error) {
        res.status(500).json({ message: "Error fetching dashboard data" });
    }
};
