const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("Connection successful")
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats =[
    {
    from : "frank",
    to: "Silva",
    msg : "Hello How are you",
    date: new Date()
    },
     {
    from : "bob",
    to: "sunny",
    msg : "Hello bhaiyaa",
    date: new Date()
    },
     {
    from : "prick",
    to: "alex",
    msg : "Hello poatan ",
    date: new Date()
    },
     {
    from : "tony",
    to: "max",
    msg : "Hello this is tony",
    date: new Date()
    },
     {
    from : "dustin",
    to: "comor",
    msg : "Hello brooo",
    date: new Date()
    },
]
Chat.insertMany(allChats)