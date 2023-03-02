const express = require("express");
const cors = require("cors");
const zines = require("./zines.js");

const app = express();

app.use(cors());

const PORT = 5001; 

app.get("/", (req,res) => {
    res.json("Hello, my name is 5001 and I will be your server this evening.");
})

app.get("/api/zines", (req,res) => {
    res.json(zines);
})

app.post("/api/zines", (req,res) => {
    let newZine = {
        "title": req.body.title,
        "author": req.body.author,
        "category": req.body.category,
        "format": req.body.format,
        "pages": req.body.pages
    };
    zines.push(newZine);
    return res.send("New zine has been seen, and saved!");
    //res.json(zines);
})

app.listen(PORT, () => console.log(`Ahoy matey! Server is running on port ${PORT}`));