import { Router } from "express";
const router = Router();
import { isLoggedIn,authorizedRoles } from "../middlewares/auth.middleware.js";
import {createList,getList,deleteList} from "../controllers/list.controller.js"
router.route('/').post(isLoggedIn,authorizedRoles("ADMIN"),createList);
router.route('/').get(getList);
router.route('/:id').delete(isLoggedIn,authorizedRoles("ADMIN"),deleteList);
export default router;