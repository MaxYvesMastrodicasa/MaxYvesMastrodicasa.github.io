import { getAllApps } from "../../controllers/AppBook.js";

const router = Express.Router();

router.get("/",getAllApps);
    
export default router;