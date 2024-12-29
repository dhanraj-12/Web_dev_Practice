const express = require('express')
const app = express()
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Kingslayer"
const port = 3000

let users  = [];


function authmiddleware(req,res,next) {
    const token = req.headers.authorization;
    const decodeddata = jwt.verify(token,JWT_SECRET);
    if(decodeddata.username) {
        req.username = decodeddata.username;
        next();
    } else {
        res.json({
            message : "You are not loged in Login again"
        })
    }
}

app.use(express.json())
app.post("/signup", (req,res) => {
    const username = req.body.username;
    const password = req.body.password

    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "Yo are signed in"
    })
});


app.post("/signin", (req,res) => {
    const username = req.body.username;
    const password = req.body.password

    const user = users.find(user => user.username === username && user.password === password);
    if(user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);
        user.token = token;
        res.json({
            message : "Succefully login and token is provided",
            token : token
        })
    }else {
        res.json({
            message : "invalid user"    
        })
    }
})



app.get("/me", authmiddleware, (req,res) => {
        const user = users.find(user => user.username === req.username);
    
        if(user) {
            res.send({
                username : user.username,
                password : user.password
            })
        }else {
            res.status(403).send({
                message : "invalide"
            })
        }
})









app.listen(port, () => console.log(`Example app listening on port ${port}!`))