import { Request , Response } from "express";
import User from "../models/user.model";
import Session from "../models/session.model";
import { Jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const logout = async (req:Request , res: Response)=>{
    const decodedToken = req.body.userId;
    try{
        await Session.update(
            {
                status: false
            },{where : {userId: decodedToken,status: true}}
        )
        res.send("User Log out successfull")
    }
    catch(err)
    {
        res.status(402).json({err:"Server err"})
    }
}