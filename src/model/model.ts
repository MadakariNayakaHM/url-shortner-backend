import { timeStamp } from "console";
import mongoose  from "mongoose";
import { nanoid } from "nanoid";


const shortUrlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        require:true
    },
    shortUrl:{
        type:String,
        require:true,
        default:()=>nanoid().substring(0,10)
        ,
    },
    clicks:{
        type:Number,
        default:0
    },
    
},{timestamps:true})

const shortUrlModel = mongoose.model("shortUrlModel", shortUrlSchema)

export default shortUrlModel