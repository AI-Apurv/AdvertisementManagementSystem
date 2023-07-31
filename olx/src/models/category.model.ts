import { Model,DataTypes } from "sequelize";
import { sequelize } from "../core/connection";
import { Date } from "mongoose";


class Category extends Model
{
    id!: number 
    name!: string 
    parentId!: number
    createdAt!: Date
    updatedAt!: Date
}

Category.init(
    {
        id:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true

        },
        name:{
            type : DataTypes.STRING,

        },
        parentId:{
            type : DataTypes.INTEGER,

        },
        createdAt:{
            type : DataTypes.DATE,

        },
        updatedAt:{
            type : DataTypes.DATE,

        },

    },
    {
        sequelize ,
        tableName : 'categories' 
    }
)

Category.sync({force: true})

export default Category