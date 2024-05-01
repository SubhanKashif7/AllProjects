import { Todo } from "../models/todo.model.js"
const addTodo = async (req,res) => {
    try{
        const {todoTitle , todoDescription, todoBody } = req.body;
        const newTodo = new Todo({
            todoTitle,
            todoDescription,
            todoBody
        });
        await newTodo.save();
        
        const createdUser = Todo.findOne(newTodo.id).select(
            "-_id -__v"
        ) // Save the newTodo to the database

        console.log("Todo added successfully");
        res.status(201).json({ msg: "Todo added successfully", createdUser });
    }catch (e){
        res.json({msg : "err occured while adding Todo to the database",error : {isError : true , error : e}});
    }
};
export default addTodo;