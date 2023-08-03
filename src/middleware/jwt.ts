import { Request , Response , NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    userId : number;
}

export const authenticateJWT = (req: Request , res: Response , next: NextFunction) =>{
    const token = req.header('Authorization');

    if(!token)
    {
        return res.status(401).json({message: 'Missing JWT token'})
    }


        try{
            const decodedToken = jwt.verify(token,'secretKey') as DecodedToken
            req.body.userId = decodedToken.userId;
            next();
        }
        catch(err){
            return res.status(401).json({message: 'Invalid Token'})
        }
    }
export default authenticateJWT;