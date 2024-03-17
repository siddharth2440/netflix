import {Schema, model} from "mongoose"

const  listSchema = new Schema({
    title:{type:String,required:true,unique:true},
    type:{type:String},
    genre:{type:String},
    content:{type:Array}
},{timestamps:true})

const listModel = new model("movieList",listSchema)
export default listModel;