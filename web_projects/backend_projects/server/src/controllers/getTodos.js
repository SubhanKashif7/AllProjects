import { Todo } from "../models/todo.model.js";

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        
        res.status(200).json({ msg: "Todo found", todos });
    } catch (e) {
        console.error("Error getting todos:", e);
        res.status(500).json({ msg: "Error occurred while fetching Todos", error: e.message });
    }
};

export default getTodos;
