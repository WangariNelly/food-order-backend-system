import express, { Request,Response, NextFunction } from "express";
import { CreateVendor, GetVendor, GetVendorById } from "../controllers";

const router = express.Router();


//admin routes
router.post('/vendor', CreateVendor);
router.get('/vendor', GetVendor);
router.post('/vendor/:id', GetVendorById);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
     message: "Hello Admin backend!!"
    });
 });


export { router as AdminRoute };