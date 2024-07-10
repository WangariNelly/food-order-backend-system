import express, { Request, Response, NextFunction } from 'express';
import { CreateVendorInput } from '../dto';
import { Vendor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address,ownerName,pincode,password,phone,email,foodType } = <CreateVendorInput>req.body;
   
  const existingVendor = await Vendor.findOne({ email: email });

  if (existingVendor !== null) {
      return res.json({ "message": " A vendor with this email exist!"})
  }

  //generate salt
 const salt =  await GenerateSalt();
  
  //generate password
  const userPassword = await GeneratePassword(password,salt);

   const createVendor = await Vendor.create({
     name: name,
     address: address,
     pincode: pincode,
     foodType: foodType,
     email: email,
     password: userPassword,
     salt: salt,
     ownerName: ownerName,
     phone: phone,
     rating: 0,
     serviceAvailable: false,
     coverImages: [],
   })

  return res.json(createVendor);
}

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {

}


