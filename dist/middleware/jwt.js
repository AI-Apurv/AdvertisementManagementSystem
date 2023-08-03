"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Missing JWT token' });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, 'secretKey');
        req.body.userId = decodedToken.userId;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};
exports.authenticateJWT = authenticateJWT;
exports.default = exports.authenticateJWT;
//# sourceMappingURL=jwt.js.map