import Category from "../models/category.model";
import Product from "../models/product.model";
import { Request,Response } from "express";

export const addProduct = async(req:Request , res:Response)=>{
    const detail = req.body;
    try{
        await Product.create(detail)
        res.status(201).json({message: "product registered successfully"})
    }
    catch(error)
    {
        res.status(500).json({message:"Server Error"})
        console.log(error);
    }
}


export const  getProduct= async(req:any,res:any)=>{

    try{

        // console.log("Params:  ",  req.params);
        // console.log("Query Params:  ", req.query);
        let prod = await Product.findByPk(req.query.id)
        res.status(201).json(prod); 
    }
    catch(err){
        res.status(500).json({ message: "Server Error" });
        console.log(err);
    }
}


export const addBid = async (req: any , res: any)=>
{
    const pid = req.params.id ;
    const current_Bid = req.body.currentBid;
    try{
        var product = await Product.findOne({where:{id:pid}})
        console.log(product)

        if(product.currentBid<current_Bid)
        {
            Product.update({currentBid:current_Bid},
                {where:{
                    id:pid
                }})
        }
        else 
        {
            res.status(402).json({message: "current Bid price is high"})
        }
        res.status(201).json("bid updated")
    }
    catch (error)
    {
        res.status(500).json({message: "Server Error"})
    }

}