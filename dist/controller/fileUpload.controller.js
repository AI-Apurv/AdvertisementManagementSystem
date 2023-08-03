"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setprofilepic = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const setprofilepic = async (req, res) => {
    try {
        const file = `./uploads/${req.file.originalname}`;
        let fileData = fs_1.default.readFileSync(file);
        let token = "" + req.headers.authorization;
        let decode = jsonwebtoken_1.default.verify(token, 'secretKey');
        console.log(decode);
        const result = await user_model_1.default.update({ profilePic: fileData }, { where: { id: decode === null || decode === void 0 ? void 0 : decode.userId } });
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
};
exports.setprofilepic = setprofilepic;
//# sourceMappingURL=fileUpload.controller.js.map