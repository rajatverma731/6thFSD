 const mongoose = require('mongoose');

 main()
  .then(()=>{
    console.log("connection successful")
  })
  .catch((err)=> console.log(err));

  async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }

 const userSchema = new mongoose.Schema({     // creating a schema
   name: String, 
   email: String,
   age: Number
 })

const User = mongoose.model("User", userSchema); // this will create a collection in our data base (MODEL)


User.findByIdAndDelete('6980d5ed758989b46911f435')
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err)
})

// User.findOneAndUpdate({name: "Tony"}, {age:110}).then((res)=>{console.log(res)})
// User.updateOne({age:{$gt: 30}}, {age:23}).then((res)=>{console.log(res)}) 



// User.find({age:{$gt: 47}})
// .then((res)=>{
//   console.log(res[0].name);
// })
// .catch((err)=>{
//   console.log(err);
// })



// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 34},
//   {name: "peter", email: "peter@gmail.com", age: 41},
//   {name: "steve", email: "steve@gmail.com", age: 24}
// ])
// .then((res)=>{
//   console.log(res);
// })

// const user1 = new User({
//   name: "Gary",
//   email: "Gary001@gmail.com",
//   age:  48
// })

// user1.save();


// const user2 = new User({
//   name: "Ash",
//   email: "Ash001@gmail.com",
//   age:  16
// })

// user2
// .save()
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })
