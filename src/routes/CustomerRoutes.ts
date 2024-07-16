import express, { Request, Response, NextFunction } from 'express';
import {  AddToCart, CreateOrder, CustomerLogin, CustomerSignUp, CustomerVerify, DeleteCart, EditCustomerProfile, GetCart, GetCustomerProfile,  GetOrderById,  GetOrders,  RequestOtp,  } from '../controllers';
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
router.patch('/verify', CustomerVerify);


// OTP / request OTP 
router.get('/otp', RequestOtp);

//Profile 
router.get('/profile', GetCustomerProfile);
router.patch('/profile', EditCustomerProfile);


//orders
router.post('/create-order', CreateOrder);
router.get('/orders', GetOrders);
router.get('/order/:id',GetOrderById);



//Cart
router.post('/cart', AddToCart)
router.get('/cart', GetCart)
router.delete('/cart', DeleteCart)







export { router as CustomerRoute}