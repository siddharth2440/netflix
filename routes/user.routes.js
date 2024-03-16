import { Router } from "express";
const router = Router()
import upload from "../middlewares/multer.middleware.js"
import {registerUser,loginUser,getProfile,logout,getAllUserInfo,updateUserInfo } from "../controllers/user.controllers.js"
import {isLoggedIn,authorizedRoles} from "../middlewares/auth.middleware.js";

router.post('/',upload.single('avatar'),registerUser);
router.get('/',isLoggedIn,authorizedRoles("ADMIN"),getAllUserInfo);
router.post('/login',loginUser);
router.get('/me',isLoggedIn,getProfile);
router.get('/logout',isLoggedIn,logout);
router.put('/update',isLoggedIn,upload.single('avatar'),updateUserInfo);

export default router;