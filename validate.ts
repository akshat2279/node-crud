//import { NextFunction } from "express";
import express, { Request, Response, Application, NextFunction } from "express";

const Joi = require('joi');
//  export const schema = Joi.object({
//     id: Joi.number(),
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),})

//app.use(express.json());
export const validateUser = (req: Request, res: Response,next:NextFunction) => {
            const schema = Joi.object().keys({
                id: Joi.number(),
              name: Joi.string().required(),
            //   email: Joi.string().required(),
            //   password: Joi.string().required(),
            });
          
            const {error}= schema.validate(req.body,{abortEarly:false})
            if(error){
               res.status(200).json({errors:error})
            }
            else{
               next()
            }
          };
//const { error, value } = schema.validate({ a: 'a string' });