import express, { Request, Response, NextFunction } from "express";
import { GetVendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin } from "../controllers/VendorController";
import { Authenticate } from "../middleware";

const router = express.Router();

router.post('/login', VendorLogin);
router.get('/profile', Authenticate, GetVendorProfile);
router.patch('/profile', Authenticate, UpdateVendorProfile);
router.patch('/service', UpdateVendorService);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.json({
    message: "Hello Vendor backend!!"
   })
})






export { router as VendorRoute };
