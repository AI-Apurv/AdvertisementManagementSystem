import { sequelize } from "../core/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';

class Token extends Model {
    delete() {
        throw new Error('Method not implemented.');
    }
    public id!: number;
    public token!:string;
    // public created_at: Date;
   
  }
  
  Token.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
        type: DataTypes.STRING,
        // primaryKey: true,
        // autoIncrement: true,
      },
    // created_at: {
    //     type: DataTypes.DATE
        
    //   }
}, {
  
    sequelize, 
    modelName: 'tokens' 
  });
  //Token.sync({ force: true });

  
  
  
  export default Token;
  