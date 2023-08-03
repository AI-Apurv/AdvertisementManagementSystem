"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMiddleware = exports.signupMiddleware = void 0;
const joi_1 = __importDefault(require("joi"));
const express_joi_validation_1 = require("express-joi-validation");
const validate = (0, express_joi_validation_1.createValidator)();
const signupMiddleware = (req, res, next) => {
    const signupSchema = joi_1.default.object({
        id: joi_1.default.number().required(),
        userName: joi_1.default.string().required().min(5).messages({
            'string.base': `"userName" should be a type of 'text'`,
            'string.empty': `"userName" cannot be empty`,
            'string.min': `"userName" should have a minimum length of {#limit}`,
        }),
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
        email: joi_1.default.string().email().required().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be empty`,
            'string.email': `"email" must be a valid email`,
        }),
        password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be empty`,
            'string.pattern.base': `"password" must be between 3 and 30 characters long and contain only letters and numbers`,
        }),
        address: joi_1.default.string().required(),
        status: joi_1.default.string().required(),
        profilePic: joi_1.default.string(),
        contactNumber: joi_1.default.number().required().messages({
            'number.base': `"mobileNo" should be a type of 'number'`,
            'number.empty': `"mobileNo" cannot be empty`,
        }),
        gender: joi_1.default.string().required(),
        dob: joi_1.default.string().required(),
    });
    const { error } = signupSchema.validate(req.body, {
        abortEarly: false, //this option ensures that all error are shown, not just the first one
    });
    if (error) {
        const errorMessage = error.details.map((err) => err.message).join(', ');
        console.log("----------------error-----------------");
        res.status(422).send(errorMessage);
    }
    else {
        next();
    }
};
exports.signupMiddleware = signupMiddleware;
const loginMiddleware = (req, res, next) => {
    const loginSchema = joi_1.default.object({
        userName: joi_1.default.string().required().min(5).messages({
            'string.base': `"userName" should be a type of 'text'`,
            'string.empty': `"userName" cannot be empty`,
            'string.min': `"userName" should have a minimum length of {#limit}`,
        }),
        password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be empty`,
            'string.pattern.base': `"password" must be between 3 and 30 characters long and contain only letters and numbers`,
        }),
    });
    const { error } = loginSchema.validate(req.body, {
        abortEarly: false, // This option ensures that all errors are shown, not just the first one.
    });
    if (error) {
        const errorMessage = error.details.map((err) => err.message).join(', ');
        console.log("----------------error-----------------");
        console.log(errorMessage);
        res.status(422).send(errorMessage); // Sending error status and message to the client.
    }
    else {
        next();
    }
};
exports.loginMiddleware = loginMiddleware;
//# sourceMappingURL=joiValidation.js.map