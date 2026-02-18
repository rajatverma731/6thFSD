const express = require("express"); // requiring express
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs"); // this means the thing which is going to be used to render our document is gonna be ejs
app.set("views", path.join(__dirname,"/views")) // with this line now we can  run our file from any folder

// app.get("/",(req,res)=>{
//     res.send("This is home")
// })

// app.get("/",(req,res)=>{
//     res.render("home.ejs")   // home.ejs views wala folder dhundega jisme humari home.ejs ki file hai
// })

// app.get("/hello", (req,res)=>{
//     res.send("Hello uncle ji ")
// })

// app.get("/roolDice",(req,res) =>{
//     let diceVal =  Math.floor(Math.random()*6 +1);  // its like data  is coming from database 
//     res.render("roolDice.ejs", {num: diceVal}) 
// })

app.get("/ig/:username",(req,res)=>{
   const instaData = require("./data.json");
   console.log(instaData)
    res.render("instagram.ejs")
})

app.listen(port , ()=>{
    console.log(`listening on port: ${port}`);
})