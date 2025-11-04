const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs"); 

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/roolDice",(req,res) =>{
    let diceVal =
        <%= Math.floor(Math.random()*6 +1); %>
    res.render("roolDice.ejs")
})
app.listen(port , ()=>{
    console.log(`listening on port: ${port}`);
})