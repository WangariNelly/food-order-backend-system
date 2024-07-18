import express, { Request, Response, NextFunction } from "express";
import { GetFoods, AddFood, GetVendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin, UpdateVendorCoverImage, ProcessOrder, GetOrderDetails, GetOrders, GetOffers, AddOffer, EditOffer  } from "../controllers";
import { Authenticate } from "../middleware";
import fs from 'fs';
import path from 'path';
import multer from "multer";

const router = express.Router();


// configure multer
const imageStorage = multer.diskStorage({
   destination: function (req, file, cb) {

     const imagesDir = path.join(__dirname, '..', 'images');

     if (!fs.existsSync(imagesDir)) {
       fs.mkdirSync(imagesDir, { recursive: true });
     }
     cb(null, imagesDir);
     
   },

   filename: function (req, file, cb) {
     const timestamp = new Date().toISOString().replace(/:/g, '-');
     cb(null, `${timestamp}_${file.originalname}`);
   }

 });

const images = multer({storage: imageStorage}).array('images', 10)


router.post('/login', VendorLogin);

router.use(Authenticate);
router.get('/profile',GetVendorProfile);
router.patch('/profile',UpdateVendorProfile);
router.patch('/coverimage',images,UpdateVendorCoverImage);
router.patch('/service', UpdateVendorService);

router.post('/food',images, AddFood);
router.get('/foods', GetFoods);

//Orders
router.get('/orders', GetOrders);
router.put('/order/:id/process', ProcessOrder);
router.get('/order/:id', GetOrderDetails)
 


//Offers
router.get('/offers', GetOffers);
router.post('/offer', AddOffer);
router.put('/offer/:id', EditOffer)



router.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.json({
    message: "Hello Vendor backend!!"
   })
})





export { router as VendorRoute };
