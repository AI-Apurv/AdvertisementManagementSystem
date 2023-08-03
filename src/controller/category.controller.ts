import { sequelize } from "../core/connection";
import Category from "../models/category.model";
import { Request,Response } from "express";
import { QueryTypes } from 'sequelize';


export const getCategory = async (req: Request, res: Response)=> {
       try{
        const recursiveQuery = `
        WITH RECURSIVE category_recursive AS (
            -- Anchor member
            SELECT id, name, parentId
            FROM "categories"
            WHERE parentId IS NULL
          
            UNION ALL
          
            -- Recursive member
            SELECT c.id, c.name, c.parentId
            FROM "categories" c
            INNER JOIN category_recursive cr ON c.parentId = cr.id
          )
          
          SELECT *
          FROM category_recursive
        `;

        const categoriesWithSubcategories = await sequelize.query(recursiveQuery, {
            type: QueryTypes.SELECT,
        });

        // return categoriesWithSubcategories;
        res.status(200).json(categoriesWithSubcategories);
    
    }catch(error){
        res.status(500).json({message: "Server Error"});
            console.log(error);
    }
}