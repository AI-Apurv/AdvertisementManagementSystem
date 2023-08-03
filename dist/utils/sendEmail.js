"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = async (email, subject, text) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     host: process.env.HOST,
        //     service: process.env.SERVICE,
        //     port: 587,
        //     secure: true,
        //     auth: {
        //         user: process.env.USER,
        //         pass: process.env.PASS,
        //     },
        // });
        // await transporter.sendMail({
        //     from: process.env.USER,
        //     to: email,//email
        //     subject: subject,
        //     text:  text,
        // });
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'willow13@ethereal.email',
                pass: 'pAqSbRVFSQPK1VcJPM'
            }
        });
        await transporter.sendMail({
            from: 'willow13@ethereal.email',
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent sucessfully");
    }
    catch (error) {
        console.log(error, "email not sent");
    }
};
exports.default = sendEmail;
//# sourceMappingURL=sendEmail.js.map