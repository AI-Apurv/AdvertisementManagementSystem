"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgetPassword = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const token_model_1 = __importDefault(require("../models/token.model"));
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const joi_1 = __importDefault(require("joi"));
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const forgetPassword = async (req, res) => {
    try {
        const schema = joi_1.default.object({ email: joi_1.default.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);
        const user = await user_model_1.default.findOne({ where: { email: req.body.email } });
        if (!user)
            return res.status(400).send("user does not exist");
        let token = await token_model_1.default.findOne({ where: { id: user.id } });
        if (!token) {
            token = await token_model_1.default.create({
                id: user.id,
                token: crypto_1.default.randomBytes(32).toString("hex"),
            });
        }
        const link = `${process.env.BASE_URL}/password-reset/${user.id}/${token.token}`;
        await (0, sendEmail_1.default)(user.email, "Password reset", link);
        res.send("password reset link sent to your email account");
    }
    catch (error) {
        res.send("An error occured");
        console.log("--------------error----------------");
    }
};
exports.forgetPassword = forgetPassword;
//-----------------------------resetPassword--------------------
const resetPassword = async (req, res) => {
    try {
        const schema = joi_1.default.object({ password: joi_1.default.string().required() });
        const { error } = schema.validate(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);
        const user = await user_model_1.default.findByPk(req.params.id);
        if (!user)
            return res.status(400).send("invalid link or expired");
        const token = await token_model_1.default.findOne({ where: {
                id: user.id,
                token: req.params.token,
            } });
        if (!token)
            return res.status(400).send("Invalid link or expired");
        user.password = req.body.password;
        // await token.delete();
        await user.save();
        // token.delete();
        res.send("password reset sucessfully.");
    }
    catch (error) {
        res.send("An error occured");
        console.log(error);
    }
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=forgetpassword.controller.js.map