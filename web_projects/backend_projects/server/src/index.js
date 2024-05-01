import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./db/connectDb.js";
import app from "./app/app.js";
dotenv.config({
    path : "./server/.env"
});
connectDatabase().then((connectionInstance)=>{
    console.log("Mongo Db connected successfully!!!");
    app.listen(process.env.PORT, (err)=>{
        if (err){
            console.log("Express App Error Occured",err);
        }else{
            console.log("App listening on port",process.env.PORT);
        }
    })
}).catch