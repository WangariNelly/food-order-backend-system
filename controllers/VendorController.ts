import express, { Request, Response, NextFunction } from 'express';
import { VendorLoginInputs, VendorPayload  } from '../dto';
import { findVendor } from './AdminController';
import { GenerateSignature, ValidatePassword } from '../utility';


export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email,password } =  <VendorLoginInputs> req.body;

    const existingVendor = await findVendor('', email);

    if (existingVendor !== null) {
   const validation = await ValidatePassword(password, existingVendor.password,existingVendor.salt);
        if (validation) {

            const signature = GenerateSignature({
                _id: existingVendor.id,
                email: existingVendor.email,
                foodTypes: existingVendor.foodType,
                name: existingVendor.name
            })

    return res.json(signature)
         }
          else {return res.json({"message": "Logins not valid!"})
}
} 
};



export const GetVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
     const user = req.user;
     if (user) {
        const existingVendor = await findVendor(user._id);
        return res.json(existingVendor);
     }
     return res.json({ "message": "Vendor not found"})
};



export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
}



export const UpdateVendorService = async (req: Request, res: Response, next: NextFunction) => {
}