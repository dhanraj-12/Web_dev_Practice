const express = require('express');
const {UserModel, TodoModel } = require('./db'); 
const { default: mongoose } = require('mongoose');
const {auth,JWT_SECRET} = require("./Auth");
const jwt = require('jsonwebtoken')
const app = express();
const port = 3000;
app.use(express.json());



async function conn() {
    try {
        await mongoose.connect("mongodb+srv://dj004786:VgFZDNsjJTJvatDi@web-dev-practice.9tnbr.mongodb.net/Todo-Database?retryWrites=true&w=majority",
        );
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

conn();

app.post("/signup", async (req,res) => {

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        name : name,
        email : email,
        password : password
    })

    res.json({
        message : "You are singup successsfully"
    })

});


app.post("/singin", async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response =  await UserModel.findOne({
        email : email,
        password : password
    })

    if(response) {
        const token = jwt.sign({
            id: response._id.toString()
        },JWT_SECRET);

        res.json({
            token : token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.post("/todo", auth, async (req,res) => {
    
});


app.get("/todos", (req,res) => {

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))