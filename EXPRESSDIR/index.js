const express = require("express"); // express package require kiya or usko express keyword me save kiya
const app = express(); // calling the express function an storing in app keyword

//So now app is your actual server instance.
// You’ll use it later to:

// handle routes → app.get("/", callback)

// start server → app.listen(3000)

// use middleware → app.use(...)

// console.dir(app)

let port = 3000; // 8080
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

// app.get("/",(req,res) =>{
//     res.send("This is the root Path");
// })
app.get("/apple",(req,res) =>{
    res.send("This is the apple Path");
})
app.get("/banana",(req,res) =>{
    res.send("This is the banana Path");
})
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("this is a basic response")
})

// app.all("/*",(req,res) =>{
//     res.send("This is wrong route");
// })

// app.use((req,res)=>{ // app.use is used to handle middleware before the response is sent.
    // console.log("request recieved") // this gives a notification to the node that the request is accepted
    // res.send("This is a basic response");
    // res.send({
    //     name: "Apple",
    //     color: "Red",
    //     Weight: "15 Gm"
    // })
    // res.send("<h1>Fruits</h1> <ul> <li>Guava</li> <li>Banana</li> </ul>"
    // )
// })