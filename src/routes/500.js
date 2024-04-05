import Express from "express";
import { get500 } from "../../controllers/500.js";

const router = Express.Router();

router.get("/",get500);

export default router;