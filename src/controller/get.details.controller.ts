import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwtDecode from "jwt-decode";
import Session from "../models/session.model";
import User from "../models/user.model";


export const getUserDetails = async (req:Request , res: Response)=>
{
    const token = req.header('Authorization');
    const decodedToken = req.body.userId ;

    if(!token)
    {
        return res.status(401).json({error: 'Token not found'})
    }
    try{
        const user = await User.findOne({where: { id: decodedToken}})
        if(!user)
        {
            res.send("user not found")
        }
       
        const isSession = await Session.findOne({where: {userId: decodedToken, status: true}})
        console.log("user found and active session")
        if(isSession){
            res.json(user)
        }
        else{
            res.send("User has logged out")
        }
    }
    catch(err)
    {
        res.status(500).json({error: 'Internal Server Error'})
    }

}
