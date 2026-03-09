const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to Web Framework");
});

app.listen(3000, () =>{
    console.log("Port Running on 4000 ");
    console.log("Pipeline Test Demo 1");
});
