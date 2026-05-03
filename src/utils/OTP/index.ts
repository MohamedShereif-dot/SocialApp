import { json } from "stream/consumers";

export const generateOTP = ()=>{
    return JSON.stringify(Math.floor(Math.random()*9999+10000));
}

export const generateExpiryDate = (time:number)=>{
    return Date.now() + time ;
}