const express = require("express");
const cors = require("cors");
const zines = require("./zines.js");

const app = express();

app.use(cors());

app.get("/", (req,res) => {
    res.json("Hello, my name is 5001 and I will be your server this evening.");
})

app.get("/api/zines", (req,res) => {
    res.json(zines);
})

const PORT = 5001; 

app.listen(PORT, () => console.log(`Ahoy matey! Server is running on port ${PORT}`));