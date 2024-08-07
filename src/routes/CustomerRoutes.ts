import express, { Request, Response, NextFunction } from 'express';
import {  AddToCart, CreateOrder, CreatePayment, CustomerLogin, CustomerSignUp, CustomerVerify, DeleteCart, EditCustomerProfile, GetCart, GetCustomerProfile,  GetOrderById,  GetOrders,  RequestOtp, VerifyOffer,  } from '../controllers';
import { Authenticate } from '../middleware';
import { Offer } from '../models/Offer';

const router = express.Router();

// Signup / Create Customer 
router.post('/signup', CustomerSignUp)

//Login
router.post('/login', CustomerLogin)

// Authentication 
router.use(Authenticate);

// Verify Customer Account 
router.patch('/verify', CustomerVerify);


// OTP / request OTP 
router.get('/otp', RequestOtp);

//Profile 
router.get('/profile', GetCustomerProfile);
router.patch('/profile', EditCustomerProfile);


//Cart
router.post('/cart', AddToCart)
router.get('/cart', GetCart)
router.delete('/cart', DeleteCart)


router.get('/offer/verify/:id', VerifyOffer);


//Payment
router.post('/create-payment', CreatePayment);


//orders
router.post('/create-order', CreateOrder);
router.get('/orders', GetOrders);
router.get('/order/:id',GetOrderById);




export { router as CustomerRoute}