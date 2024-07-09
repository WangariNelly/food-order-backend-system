import express, { Request, Response, NextFunction } from 'express';
import { CReateVendorInput } from '../dto';
import { Vendor } from '../models';

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address,ownerName,pincode,password,phone,email,foodType } = <CReateVendorInput>req.body;
   
  const existingVendor = await Vendor.findOne({ email: email });

  if (existingVendor !== null) {
      return res.json({ "message": " A vendor with this email exist!"})
  }

   const createVendor = await Vendor.create({
     name: name,
     address: address,
     pincode: pincode,
     foodType: foodType,
     email: email,
     password: password,
     salt: 'jhjffcnkmkmcfvkjnnjj',
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


