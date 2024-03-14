import express from "express";

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next();
});

const apiRequest = async (url) =>{
    try {
        const res = await fetch(url);
        return res.json();
    } catch (error) {
        console.error(error);
    };
};
const data = undefined;

app.get("/api/about-me",(req,res)=>{
    apiRequest("https://api.github.com/users/subhankashif7").then((res)=>{
        data = res;
    })
    res.json({
        name : data.name,
        bio : data.bio,
        followers : data.followers,
        username : data.login,
        avatar_url : data.avatar_url,
        url : data.html_url,
    });
});

app.listen(3500);