import Express from "express";
import { getAllProducts } from "../../controllers/shop.js";

const router = Express.Router();

router.get("/",getAllProducts);
    
export default router;