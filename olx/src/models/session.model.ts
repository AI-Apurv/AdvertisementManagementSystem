import { sequelize } from "../core/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';

class Session extends Model {
    public id!: number;
    public userId!:number;
    // public created_at: Date;
    public status!:boolean;
   
  }
  
  Session.init({
    userId: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        // primaryKey: true,
        // autoIncrement: true,
      },
    
}, {
  
    sequelize, 
    modelName: 'sessions' 
  });
  //sequelize.sync({ force: true });


  
  
  
  export default Session;
  