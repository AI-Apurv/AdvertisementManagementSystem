import { Model, DataTypes } from "sequelize";
import { sequelize } from "../core/connection";

class Product extends Model {
    public id!: number  
    public name!: string
    public description!: string 
    public basePrice!: number 
    public currentBid!: number 
    public ownerId!: number
    public bidderId!: number
    public categoryId!: number
    public addressId!: number
    public createdAt!: Date
    public updatedAt!: Date

}

Product.init(
    {
        id:{
            type : DataTypes.INTEGER,
            primaryKey : true ,
            autoIncrement : true ,
        },
        name:{
            type : DataTypes.STRING,
            
        },
        description:{
            type : DataTypes.STRING,
           
        },
        basePrice:{
            type : DataTypes.INTEGER,
         
        },
        currentBid:{
            type : DataTypes.INTEGER,
         
        },
        ownerId:{
            type : DataTypes.INTEGER,
        
        },
        bidderId:{
            type : DataTypes.INTEGER,

        },
        categoryId:{
            type : DataTypes.INTEGER,
         
        },
        addressId:{
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
    sequelize,
    tableName: 'products',
    }
)

Product.sync({force:true})

export default Product