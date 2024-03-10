import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import randomskjs from "randomskjs"
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api",(req,res)=>{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", '*');

    res.json({
        userData : {
            name : randomskjs([
                "Ali",
                "Hassan",
                "Subhan",
                "Sana",
                "Abdullah",
                "Saim",
                "Samantha",
                "Haider"
            ]),
            age : randomskjs([
                8,9,10,13,14,11,6,20,23,15
            ])//SD
        },

    })
});

app.listen(3000)