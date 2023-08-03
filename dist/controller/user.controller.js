"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const signup = async (req, res) => {
    const data = req.body;
    try {
        const isUser = await user_model_1.default.findOne({ where: { userName: data.userName } });
        if (!isUser) {
            const { password } = data;
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            data.password = hashedPassword;
            var user = user_model_1.default.create(data);
            res.send("User registered successfully");
        }
        else {
            res.send("User already exist");
        }
    }
    catch (err) {
        res.send(err);
    }
};
exports.signup = signup;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// export const signup = async (req: Request, res: Response) => {
//   // Joi validation schema
//   const userValidationSchema = Joi.object({
//     userName: Joi.string().required(),
//     firstName: Joi.string().required(),
//     lastName: Joi.string().required(),
//     email: Joi.string().pattern(emailRegex).required(),
//     password: Joi.string()
//       .required()
//       .min(6)
//       .regex(/^(?=.*[A-Z])(?=.*[@$!*?&])[A-Za-z\d@$!%*?&]+$/),
//     address: Joi.string().required(),
//     status: Joi.boolean().required(),
//     contactNumber: Joi.string().required(),
//     gender: Joi.string().required(),
//     dob: Joi.string().required(),
//   });
//   try {
//     // Validate the request body against the validation schema
//     const { error } = userValidationSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }
//     const { userName, firstName, lastName, email, password, address, status, contactNumber, gender, dob } = req.body;
//     // Check if the user already exists
//     const isUser = await User.findOne({ where: { userName: userName } });
//     if (isUser) {
//       return res.status(409).json({ error: 'User already exists' });
//     }
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Create the new user
//     await User.create({
//       userName,
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       address,
//       status,
//       contactNumber,
//       gender,
//       dob,
//     });
//     return res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     console.error('Error while creating user:', err);
//     return res.status(500).json({ error: 'Failed to create user' });
//   }
// };
//# sourceMappingURL=user.controller.js.map