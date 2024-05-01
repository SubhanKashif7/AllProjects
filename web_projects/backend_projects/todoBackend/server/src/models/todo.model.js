import mongoose from "mongoose";

export const Todo = mongoose.model("Todo",new mongoose.Schema({
    todoTitle : {
        type : String,
        required : [true,"todo title is required"]
    },

    todoDescription : {
        type : String,
        required : [true,"todo description is required"]
    },

    todoBody : {
        type : String,
        required : [true,"todo body is required"]
    }
},{timestamps : true}))