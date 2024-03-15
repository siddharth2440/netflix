import { Router } from "express";
const router = Router()
import upload from "../middlewares/multer.middleware.js"
import {registerUser} from "../controllers/user.controllers.js"


router.post('/',upload.single('avatar'),registerUser);

export default router