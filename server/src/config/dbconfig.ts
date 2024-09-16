import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.DB ||"")
        console.log('db connecterd')
    }
    catch(e)
    {
        console.log(e)
    }
}

export default connectDb