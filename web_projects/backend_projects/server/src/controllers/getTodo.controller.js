import { Todo } from "../models/todo.model.js";

const getTodo = async (req, res) => {
    try {
        const { todoTitle } = req.query; // Use req.query instead of req.body for URL parameters

        if (!todoTitle) {
            return res.status(400).json({ msg: "todoTitle parameter is missing" });
        }

        const todo = await Todo.findOne({ todoTitle });

        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(200).json({ msg: "Todo found", todo });
    } catch (e) {
        console.error("Error fetching todo:", e);
        res.status(500).json({ msg: "Error occurred while fetching Todo", error: e.message });
    }
};

export default getTodo;
