const authService = require("../services/authService");

exports.register = async (req, res) => {
    try {
        const response = await authService.register(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const response = await authService.login(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
