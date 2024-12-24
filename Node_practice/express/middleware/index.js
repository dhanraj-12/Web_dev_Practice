const express = require('express')
const app = express()
const port = 3000



function aggMiddleware(req,res,next) {
    const age = parseInt(req.query.age);
    if(age >= 14) {
        next();
    }else {
        res.json({
            message: "soory you are not of age yet"
        });
    }
}

function moneyMiddleware(req,res,next) {
    const money = parseInt(req.query.money);
    if(money >= 100) {
        next();
    }else {
        req.json({
            message : "Sorry not wnough money"
        });
    }
}


app.get("/ride",aggMiddleware, moneyMiddleware, (req,res) => {
    res.json({
        message : "succedully rided ride"
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))