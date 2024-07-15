import express, { Request, Response, NextFunction } from 'express';
import {  CustomerLogin, CustomerSignUp, CustomerVerify, EditCustomerProfile, GetCustomerProfile,  RequestOtp,  } from '../controllers';
import { Authenticate } from '../middleware';
import { Offer } from '../models/Offer';

const router = express.Router();

// Signup / Create Customer 
router.post('/signup', CustomerSignUp)

//LoginA
router.post('/login', CustomerLogin)

// Authentication 
router.use(Authenticate);

// Verify Customer Account 
router.patch('/verify', CustomerVerify)

// OTP / request OTP 
router.get('/otp', RequestOtp)

//Profile 
router.get('/profile', GetCustomerProfile)
router.patch('/profile', EditCustomerProfile)


export { router as CustomerRoute}