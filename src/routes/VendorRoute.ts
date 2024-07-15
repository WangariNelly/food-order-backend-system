import express, { Request, Response, NextFunction } from "express";
import { GetFoods, AddFood, GetVendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin, UpdateVendorCoverImage } from "../controllers/VendorController";
import { Authenticate } from "../middleware";
import multer from "multer";

const router = express.Router();

const imageStorage = multer.diskStorage({

   destination: function(req,file,cb) {
      cb(null, 'images')
   },
   filename: function(req,file,cb){
      cb(null, new Date().toISOString()+'_'+file.originalname)
   },
})

const images = multer({ storage: imageStorage}).array('images', 10)


router.post('/login', VendorLogin);

router.use(Authenticate)
router.get('/profile',GetVendorProfile);
router.patch('/profile',UpdateVendorProfile);
router.patch('/coverimage',images,UpdateVendorCoverImage);
router.patch('/service', UpdateVendorService);

router.post('/food', images, AddFood);
router.get('/foods', GetFoods);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.json({
    message: "Hello Vendor backend!!"
   })
})






export { router as VendorRoute };