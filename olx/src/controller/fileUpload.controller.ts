import User from "../models/user.model";
import fs from "fs";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
export const setprofilepic = async (req: Request,res:Response) => {
    try {
    
        const file = `./uploads/${req.file.originalname}`;
        let fileData = fs.readFileSync(file)
        let token=""+req.headers.authorization;
        let decode:any=jwt.verify(token,'secretKey')
        console.log(decode)
        const result =await User.update({ profilePic: fileData }, { where: { id: decode?.userId } });
        res.send(result);

    }
    catch (error){
        res.send(error);
    }
}

