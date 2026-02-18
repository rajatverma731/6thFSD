const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log(err)
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Defining Schema

const bookSchema =  new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    age:{
        type: Number
    },
    discount:{
        type: Number,
        default: 0
    },
    category:{
        type: String,
        enum:["fiction","non-fiction"]
    }
})

const Book = mongoose.model("Book",bookSchema); // Model

// inserting values

let Book1 = new Book({
    title : "Encyclopedia",
    author: "Scientist",
    age: 73 
    
})


let Book2 = new Book({
    title : "Chemistry",
    author: "Lakhmir Singh",
    age: 73 
    
})

//Saving data
Book1.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
Book2.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
