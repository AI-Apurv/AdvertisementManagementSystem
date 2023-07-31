import { sequelize } from "../core/connection";
import { DataTypes, Model } from "sequelize";
import Category from "./category.model";

class Address extends Model {
    id!: number
    street1!: string
    street2!: string
    landmark!: string
    city!: string
    state!: string
    zipCode!: string
    addressType!: string
    userId!: string
    createdAt!: string
    updatedAt!: string
}

Address.init(
    {
        id:{
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        street1:{
            type : DataTypes.STRING,
            
        },
        street2:{
            type : DataTypes.STRING,

        },
        landmark:{
            type : DataTypes.STRING,

        },
        city:{
            type : DataTypes.STRING,

        },
        zipCode:{
            type : DataTypes.INTEGER,

        },
        addressType:{
            type : DataTypes.INTEGER,

        },
        userId:{
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
        tableName : 'addresses' 
    }
)

Category.sync({force:true})

export default Address