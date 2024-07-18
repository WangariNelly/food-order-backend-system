import express, { Request,Response, NextFunction } from "express";
const router = express.Router();


import { GetAvailableOffers, GetFoodAvailability, GetTopRestaurants, RestaurantById, SearchFoods, GetFoodsIn30Min } from '../controllers';

// Food Availability 
router.get('/:pincode', GetFoodAvailability )

//Top Restaurant 
router.get('/top-restaurant/:pincode', GetTopRestaurants)

// Food Available in 30 Minutes 
router.get('/foods-in-30-min/:pincode', GetFoodsIn30Min)

//Search Foods
router.get('/search/:pincode', SearchFoods)

// Search Offers
router.get('/offers/:pincode', GetAvailableOffers)

//Find Restaurant by ID 
router.get('/restaurant/:id', RestaurantById)




export { router as ShoppingRoute };