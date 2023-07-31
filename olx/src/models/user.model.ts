import {Sequelize , Model , DataTypes} from "sequelize";
import { sequelize , Connection } from "../core/connection";

class User extends Model {
    static 
      findById(userId: string)
      {
          throw new Error('Method not implemented')
      }
    
    public id!: number;
    public userName!: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string ;
    public password!: string;
    public address!: string;
    public status!: Boolean;
    public profilePic!: Blob ;
    public contactNumber!: string;
    public gender!: string;
    public dob!: string;
  }


  User.init(
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey : true,
          autoIncrement : true
      },
      userName: {
        type: DataTypes.STRING,
      //  allowNull: false ,
      },
      firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
      },
      profilePic: {
      //  type: DataTypes.BLOB('long'),
      type: DataTypes.BLOB,
       
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      dob: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  );

//User.sync({force : true});




export default User
