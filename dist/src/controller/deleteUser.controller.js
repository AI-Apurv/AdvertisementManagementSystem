"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const deleteUser = async (req, res) => {
    const token = req.header('Authorization');
    if (!token)
        res.send("token not found");
    try {
        const decode = req.body.userId;
        console.log(decode);
        const user = await user_model_1.default.destroy({ where: { id: decode } });
        if (!user)
            res.send("user not found");
        res.send("User deleted successfully");
    }
    catch (err) {
        res.send(err);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=deleteUser.controller.js.map