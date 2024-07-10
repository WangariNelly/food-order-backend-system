import express, { Request, Response, NextFunction } from 'express';
import { EditVendorInput, VendorLoginInputs, VendorPayload, CreateFoodInputs } from '../dto';
import { findVendor } from './AdminController';
import { GenerateSignature, ValidatePassword } from '../utility';
import { Food } from '../models'


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
}



export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, foodTypes, phone} = <EditVendorInput>req.body
    const user = req.user;
     if (user) {
        const existingVendor = await findVendor(user._id);
        if (existingVendor !== null) {
            existingVendor.name = name;
            existingVendor.address = address;
            existingVendor.phone = phone;
            existingVendor.foodType = foodTypes;

            const savedResult = await existingVendor.save()
            return res.json(savedResult);
        }
        return res.json(existingVendor);
     }
     return res.json({ "message": "Vendor not found"})
}



export const UpdateVendorService = async (req: Request, res: Response, next: NextFunction) => {

    const user = req.user;
     if (user) {
        const existingVendor = await findVendor(user._id);
        if(existingVendor !== null){
            existingVendor.serviceAvailable = !existingVendor.serviceAvailable;
            const savedResult = await existingVendor.save()
            return res.json(savedResult);
        }
        return res.json(existingVendor);
     }
     return res.json({ "message": "Vendor not found"})
}


//food

export const AddFood = async (req: Request, res: Response, next: NextFunction) => {

    const user = req.user;


    const { name, description, category, foodType, readyTime, price } = <CreateFoodInputs>req.body;
     
    if(user){

       const vendor = await findVendor(user._id);

       if(vendor !== null){
            const food = await Food.create({
                vendorId: vendor._id,
                name: name,
                description: description,
                category: category,
                price: price,
                rating: 0,
                images: ['mock.jpg'],
                readyTime: readyTime,
                foodType: foodType,
            })
            vendor.foods.push(food);
            const result = await vendor.save();
            return res.json(result);
       }

    }
    return res.json({'message': 'Unable to Update vendor profile '})
}

export const GetFoods = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
 
    if(user){

       const foods = await Food.find({ vendorId: user._id});

       if(foods !== null){
            return res.json(foods);
       }

    }
    return res.json({'message': 'Foods not found!'})
}
