import express, { Request, Response, NextFunction } from 'express';
import { CreateVendorInput } from '../dto';
import { Vendor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';

export const findVendor = async (id: string | undefined, email?: string) => {
  if(email){
    return await Vendor.findOne({ email: email });
  } else {
    return await Vendor.findById(id);
  }
}

//create new vendors
export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address,ownerName,pincode,password,phone,email,foodType } = <CreateVendorInput>req.body;
   
  const existingVendor = await findVendor('', email);

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
     food: []
   })

  return res.json(createVendor);
};

// get all vendors
export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {
   const vendors = await Vendor.find();
   
   if (vendors !== null) {
    return res.json(vendors)
   }
   return res.json({"message": "vendors data does is not available"});
};


// get single vendor
export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
   const vendor = await findVendor(req.params.id);

   if (vendor !== null){
    return res.json(vendor)
   }
   return res.json({"message": "vendors data does is not available"});
};


