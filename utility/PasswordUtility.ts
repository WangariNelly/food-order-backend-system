import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import express, { Request, Response, NextFunction } from "express";
import { VendorPayload } from "../dto";
import { APP_SECRET } from "../config";
import { AuthPayload } from "../dto/Auth.dto";


export const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};

//validating password

export const ValidatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};

//generate token
export const GenerateSignature = (payload: VendorPayload) => {
    return jwt.sign(payload,APP_SECRET, { expiresIn: '1d'});  
};

//validate signature

export const ValidateSignature = async(req: Request) => {
const signature = req.get('Authorization')
if(signature){
     const payload = await jwt.verify(signature.split('')[1], APP_SECRET) as AuthPayload
    req.user = payload;

    return true;
}

    return false
}