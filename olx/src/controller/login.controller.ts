import {Request ,Response} from "express"
import User from "../models/user.model"
import Session from "../models/session.model"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {createClient} from 'redis'


export const login = async(req:Request , res: Response)=>
{


  //redis connection
  const client = createClient();
  client.on("error", (err) => console.log("redis client error <-------------", err))
  client.connect().then(()=>{
    console.log("connected")
  }).then((error)=>{
    console.log("error")
  })



    const{userName,password} = req.body;

    try{
        const user = await User.findOne({where:{userName}})

        if(!user)
        return res.status(404).send('user not find');

        const comp= await bcrypt.compare(password,user.password);
        if(comp){
         const token = jwt.sign({ userId: user.id }, 'secretKey');
         const isSession=await Session.findOne({where:{userId:user.id}})
         if(!isSession){
         const sess= await Session.create(
           {
             userId:user.id,
             status:true,
           }
         )}
         const redisSession = await client.get(`x`);
       console.log(redisSession)
       if (!redisSession) {
         let session_payload: any = {
           userId: user.id,
           isActive: true
 
         }
         await client.set(`${user.id}_session`, JSON.stringify(session_payload))
       }

         
         res.send({ token });

         console.log("login sucessfull");
        }
        else{
           res.send("incorrect password")
        }

    }
    catch (error) {
        console.error('Failed to login:', error);
        res.status(500).json({ error: 'Failed to login' });
     }

}