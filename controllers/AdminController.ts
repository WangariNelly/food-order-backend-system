import express, { Request, Response, NextFunction } from 'express';
import { CReateVendorInput } from '../dto';

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { name, address,ownerName,pincode,password,phone,email,foodType } = <CReateVendorInput>req.body;

  return res.json({
    name, address,ownerName,pincode,password,phone,email,foodType
  })
}

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {

}


