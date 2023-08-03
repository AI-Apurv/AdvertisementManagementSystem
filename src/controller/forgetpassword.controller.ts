import { Request, Response } from "express";
import User from "../models/user.model";
import Token from "../models/token.model";
import sendEmail from "../utils/sendEmail";
import Joi from 'joi'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config();
 

export const forgetPassword = async(req: Request , res: Response)=> {
    try{
        const schema = Joi.object({email: Joi.string().email().required()})
        const {error} = schema.validate(req.body)
        if(error)
        return res.status(400).send(error.details[0].message)
        const user = await User.findOne({where: {email: req.body.email}})

        if(!user)
        return res.status(400).send("user does not exist")

        let token = await Token.findOne({where:{id:user.id}})
        if (!token) {
            token = await Token.create({
                id: user.id,
                token: crypto.randomBytes(32).toString("hex"),
            })
        }
        const link = `${process.env.BASE_URL}/password-reset/${user.id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);
        res.send("password reset link sent to your email account");
    }
    catch(error)
    {
        res.send("An error occured")
        console.log("--------------error----------------")
    }
}




//-----------------------------resetPassword--------------------


export const resetPassword = async(req:Request, res:Response)=>{
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({where:{
            id: user.id,
            token: req.params.token,
        }});
        if (!token) return res.status(400).send("Invalid link or expired");

        user.password = req.body.password;
        // await token.delete();
        await user.save();
        // token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
}