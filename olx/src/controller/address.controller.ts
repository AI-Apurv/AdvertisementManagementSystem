import Address from "../models/address.model";
import { Request,Response } from "express";

export const addAddress = async(req: Request , res: Response)=>
{
    const detail = req.body 
    try{
           console.log(detail)
            await Address.create(detail);
            res.status(201).json({message : "Address registered successfully"})
    }
    catch(err)
    {
        res.status(500).json({message: 'server error'})
    }
}