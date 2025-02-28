const visitorService = require("../services/visitorService");

exports.createVisitor = async (req, res) => {
    try {
        const response = await visitorService.createVisitor(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllVisitors = async (req, res) => {
    try {
        const visitors = await visitorService.getAllVisitors();
        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
