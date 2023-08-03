import { NextFunction } from "express";
import Joi from 'joi';
import {Request,Response} from 'express'
import {createValidator} from 'express-joi-validation'

const validate = createValidator();

export const signupMiddleware = (req:Request, res:Response , next: NextFunction)=> {
    const signupSchema = Joi.object({
        id :  Joi.number().required(),
        userName : Joi.string().required().min(5).messages({
            'string.base': `"userName" should be a type of 'text'`,
            'string.empty': `"userName" cannot be empty`,
            'string.min': `"userName" should have a minimum length of {#limit}`,
        }),
        firstName :  Joi.string().required(),
        lastName :  Joi.string().required(),
        email : Joi.string().email().required().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be empty`,
            'string.email': `"email" must be a valid email`,
        }),
        password : Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be empty`,
            'string.pattern.base': `"password" must be between 3 and 30 characters long and contain only letters and numbers`,
        }),
        address :  Joi.string().required(),
        status :  Joi.string().required(),
        profilePic :  Joi.string(),
        contactNumber : Joi.number().required().messages({
            'number.base': `"mobileNo" should be a type of 'number'`,
            'number.empty': `"mobileNo" cannot be empty`,
        }),
        gender :  Joi.string().required(),
        dob :  Joi.string().required(),

    });

    const {error} = signupSchema.validate(req.body,{
        abortEarly : false ,//this option ensures that all error are shown, not just the first one
    });
    if(error)
    {
        const errorMessage = error.details.map((err) => err.message).join(', ')
        console.log("----------------error-----------------")
        res.status(422).send(errorMessage)
    }
    else 
    {
        next();
    }
}


export const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const loginSchema = Joi.object({
        userName: Joi.string().required().min(5).messages({
            'string.base': `"userName" should be a type of 'text'`,
            'string.empty': `"userName" cannot be empty`,
            'string.min': `"userName" should have a minimum length of {#limit}`,
        }),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be empty`,
            'string.pattern.base': `"password" must be between 3 and 30 characters long and contain only letters and numbers`,
        }),
    });

    const { error } = loginSchema.validate(req.body, {
        abortEarly: false, // This option ensures that all errors are shown, not just the first one.
    });

    if (error) {
        const errorMessage = error.details.map((err) => err.message).join(', ');
        console.log("----------------error-----------------");
        console.log(errorMessage);
        res.status(422).send(errorMessage); // Sending error status and message to the client.
    } else {
        next();
    }

}