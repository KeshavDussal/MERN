const visitorService = require("../services/visitorService");

exports.createVisitor = async (req, res) => {
    try {
        const response = await visitorService.createVisitor(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
