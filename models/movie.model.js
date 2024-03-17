import {Schema, model} from "mongoose"

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,"Movie Title must be atleast 5 characters"]
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minLength:[10,"Movie Description must be atleast 10 characters"]
    },
    image:{
        type:String,
        required:true
    },
    imageSm:{
        type:String,
        required:true
    },
    imageTitle:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    year:{
        type:String
    },
    limit:{
        type:Number
    },
    genre:{
        type:String,
    },
    isSeries:{
        type:Boolean,
        required:true,
        default:false
    }
})

const movieModel = new model("Movie",movieSchema)

export default movieModel;