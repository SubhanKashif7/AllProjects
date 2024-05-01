import { Todo } from "../models/todo.model.js";

const updateTodo = async (req, res) => {
    try {
        const { oldTitle, newTitle, newDescription, newBody } = req.body;

        if (!oldTitle || !newTitle || !newDescription || !newBody) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        // Find and update the Todo document
        const updatedTodo = await Todo.findOneAndUpdate(
            { todoTitle: oldTitle },
            { todoTitle: newTitle, todoDescription: newDescription, todoBody: newBody },
            { new: true } // Return the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(200).json({ msg: "Todo updated successfully", updatedTodo });
    } catch (e) {
        console.error("Error updating todo:", e);
        res.status(500).json({ msg: "Error occurred while updating Todo", error: e.message });
    }
};

export default updateTodo;
