import express, { Request, Response, NextFunction } from 'express';
import { VendorLoginInputs } from '../dto';
import { findVendor } from './AdminController';
import { ValidatePassword } from '../utility';


export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email,password } =  <VendorLoginInputs> req.body;

    const existingVendor = await findVendor('', email);

    if (existingVendor !== null) {
   const validation = await ValidatePassword(password, existingVendor.password,existingVendor.salt);
        if (validation) {
    return res.json(existingVendor);
         }
          else {return res.json({"message": "Logins not valid!"})
}
} 
};