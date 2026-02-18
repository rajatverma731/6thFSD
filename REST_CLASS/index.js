const express = require("express");
const app = express();
const port = ;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Dummy database
let posts = [
    {
        id : uuidv4(),
        username: "apna college",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "rajat verma",
        content: "Hardwork is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "rahul kumar",
        content: "I got selected for my first intern"
    }
];

// ROUTES

// Show all posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// Form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new");
});

// Create new post
app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// Show post in detail
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    res.render("show", { post });
});

app.patch("/posts/:id", (req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => p.id === id);
    post.content = newContent;
    console.log(post);
   res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    res.render("edit", { post }); // ✅ pass post
});


app.delete("/posts/:id", (req,res) =>{
    let {id} = req.params;
    posts =posts.filter((p) => id !== p.id);
   res.redirect("/posts");
})
 
// Server start
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
