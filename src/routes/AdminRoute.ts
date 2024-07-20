import express, { Request,Response, NextFunction } from "express";
import { CreateVendor, GetTransactionById, GetTransactions, GetVendor, GetVendorById } from "../controllers";

const router = express.Router();


//admin routes
router.post('/vendor', CreateVendor);
router.get('/vendor', GetVendor);
router.get('/vendor/:id', GetVendorById);



router.get('/transactions', GetTransactions);
router.get('/transaction/:id', GetTransactionById);



router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
     message: "Hello Admin backend!!"
    });
 });





export { router as AdminRoute };