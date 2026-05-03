import mongoose from "mongoose";
import { devConfig } from "../env/dev.config";

export const connectDB = async()=>{
   await mongoose.connect(devConfig.DB_URL as string).then(()=>{
    console.log("DB connected succefully");
   }).catch((err)=>{
    console.log("Fail to connect to DB",err);
   });
}

