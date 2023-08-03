"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserDetails = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const EditUserDetails = async (req, res) => {
    const decodedToken = req.body.userId;
    const { user_name, password, confirm_password, mobile_no } = req.body;
    var user = await user_model_1.default.findOne({ where: { id: decodedToken } });
    if (!user) {
        return res.status(404).json({ error: 'Record not found' });
    }
    if (user) {
        if (user_name) {
            user.userName = user_name;
            user.save();
        }
        if (mobile_no) {
            user.contactNumber = mobile_no;
            user.save();
        }
        // if (password) {
        //     if(password==confirm_password)
        //     {
        //     user.password= password;
        //     user.save();
        //     }
        //     else{
        //         return res.status(404).json({ error: 'Ooops !!!!!  Password mismatch' });  
        //     }
    }
    return res.status(404).json({ sucess: 'record updated' });
};
exports.EditUserDetails = EditUserDetails;
//# sourceMappingURL=updateUser.controller.js.map