import { Todo } from "../models/todo.model.js";

const deleteTodo = async (req, res) => {
    try {
        const { todoTitle } = req.body;

        if (!todoTitle) {
            return res.status(400).json({ msg: "Missing todoTitle parameter" });
        }

        // Find and delete the Todo document
        const deletedTodo = await Todo.findOneAndDelete({ todoTitle });

        if (!deletedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(200).json({ msg: "Todo deleted successfully", deletedTodo });
    } catch (e) {
        console.error("Error deleting todo:", e);
        res.status(500).json({ msg: "Error occurred while deleting Todo", error: e.message });
    }
};

export default deleteTodo;
