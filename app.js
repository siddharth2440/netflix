import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "dotenv";
import userRoute from "./routes/user.routes.js"
import movieRoute from "./routes/movie.routes.js"
import listRoute from "./routes/list.routes.js"
const app = express()

//configuring the DOTENV file
config()

//bodyParser
app.use(bodyParser.json({limit:'500mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'500mb'}))

//cookie-parser
app.use(cookieParser())

//using cors
app.use(cors({
    origin:process.env.FRONTENED_URL,
    credentials:true
}))


//using logger
app.use(morgan("dev"))


//routes-middlewares
app.use('/api/v1/users',userRoute)
app.use('/api/v1/movies',movieRoute)
app.use('/api/v1/lists',listRoute)

export default app;