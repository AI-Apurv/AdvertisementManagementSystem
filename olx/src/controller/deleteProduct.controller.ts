import { Request, Response } from "express";
import Product from "../models/product.model";

export const deleteProduct = async (req: Request, res: Response) => {
    try{
    const user = req.body.userId;
    
    const {id} = req.body;
    
    const isAvailable = await Product.findOne({where:{id,ownerId:user}});
    console.log(isAvailable);

  if (!isAvailable) {
    return res.status(404).json({ message: 'Product not found for the given user.' });
  }

  // Delete the product if it exists
  await Product.destroy({ where: { id, ownerId: user } });

  res.status(200).json({ message: 'Product Deleted.' });
} catch (error) {
  console.error('Error deleting product:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}
};