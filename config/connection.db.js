import mongoose from "mongoose";

const dbConnection = ()=>{
    mongoose
        .connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to the DataBase");
        })
        .catch((err)=>{
            console.log("Error in connecting wih the DataBase");
        })
}

export default dbConnection