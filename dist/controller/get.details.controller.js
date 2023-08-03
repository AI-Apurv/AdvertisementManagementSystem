"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const getUserDetails = async (req, res) => {
    const token = req.header('Authorization');
    const decodedToken = req.body.userId;
    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    }
    try {
        const user = await user_model_1.default.findOne({ where: { id: decodedToken } });
        if (!user) {
            res.send("user not found");
        }
        const isSession = await session_model_1.default.findOne({ where: { userId: decodedToken, status: true } });
        console.log("user found and active session");
        if (isSession) {
            res.json(user);
        }
        else {
            res.send("User has logged out");
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getUserDetails = getUserDetails;
//# sourceMappingURL=get.details.controller.js.map