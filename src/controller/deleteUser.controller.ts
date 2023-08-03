import { Request, Response } from "express";
import User from "../models/user.model";

export const deleteUser = async(req:Request, res: Response)=>{
    const token = req.header('Authorization')

    if(!token)
    res.send("token not found")

    try{
        const decode = req.body.userId;
        console.log(decode)
        const user = await User.destroy({where:{ id: decode}})
        if(!user)
        res.send("user not found")

        res.send("User deleted successfully")
    }
    catch(err)
    {
        res.send(err);
    }
}