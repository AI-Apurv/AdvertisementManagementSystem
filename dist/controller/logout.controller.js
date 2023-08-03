"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
const logout = async (req, res) => {
    const decodedToken = req.body.userId;
    try {
        await session_model_1.default.update({
            status: false
        }, { where: { userId: decodedToken, status: true } });
        res.send("User Log out successfull");
    }
    catch (err) {
        res.status(402).json({ err: "Server err" });
    }
};
exports.logout = logout;
//# sourceMappingURL=logout.controller.js.map