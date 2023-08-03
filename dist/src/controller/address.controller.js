"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAddress = void 0;
const address_model_1 = __importDefault(require("../models/address.model"));
const addAddress = async (req, res) => {
    const detail = req.body;
    try {
        console.log(detail);
        await address_model_1.default.create(detail);
        res.status(201).json({ message: "Address registered successfully" });
    }
    catch (err) {
        res.status(500).json({ message: 'server error' });
    }
};
exports.addAddress = addAddress;
//# sourceMappingURL=address.controller.js.map