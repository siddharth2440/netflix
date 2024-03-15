import express from "express";
import app from "./app.js"
import cloudinary from "cloudinary"
import dbConnection from "./config/connection.db.js";
cloudinary.v2.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    cloud_name:process.env.CLOUDINARY_NAME
})

app.listen(process.env.PORT,()=>{
    dbConnection();
    console.log(" Server is running in the PORT "+process.env.PORT);
})