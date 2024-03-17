import {Router} from "express"
const router = Router()
import {createMovie,updateMovie,getMovieDetails,deleteMovie,getRandom,getAllMovies} from "../controllers/movie.controller.js"
import { isLoggedIn,authorizedRoles } from "../middlewares/auth.middleware.js";
// const router = Router()
router.route('/').post(isLoggedIn,authorizedRoles("ADMIN"),createMovie);
router.route('/update/:id').put(isLoggedIn,authorizedRoles("ADMIN"),updateMovie);
router.route('/detailsMovie/:id').get(getMovieDetails);
router.route('/delete/:id').delete(isLoggedIn,authorizedRoles("ADMIN"),deleteMovie);
router.route('/random').get(getRandom);
router.route('/').get(isLoggedIn,getAllMovies);

export default router;