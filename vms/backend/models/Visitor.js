const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    purpose: { type: String, required: true },
    checkInTime: { type: Date, default: Date.now },
    checkOutTime: { type: Date },
    status: { type: String, enum: ["In", "Out"], default: "In" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Visitor", VisitorSchema);
