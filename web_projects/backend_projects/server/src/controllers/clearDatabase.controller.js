import { Todo } from "../models/todo.model.js";

const clearDatabase = async (req, res) => {
    try {
        const {isVerified} = req.body;
        // Clear all documents in the Todo collection
        if (isVerified){
        await Todo.deleteMany();

        res.status(200).json({ msg: "Database cleared successfully" });
        }else{
            res.json({msg : "Not verified to clear the database"})
        }
    } catch (e) {
        console.error("Error clearing database:", e);
        res.status(500).json({ msg: "Error occurred while clearing the database", error: e.message });
    }
};

export default clearDatabase;
