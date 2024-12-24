const express = require('express')
const app = express()
const port = 3000



function assingMiddleware(req,res,next) {
    const currenttime = new Date();
    const formatedtime = currenttime.toString();
    const url = req.url;
    const method = req.method;
    const hostname = req.hostname;
    console.log({
        method : method,
        url : url,
        time : formatedtime,
        hostname : hostname
    })
    next();
}

app.get('/', assingMiddleware, (req,res) => {
    res.json({
        message : "All the things loged succesfuly"
    })
})


app.post('/', assingMiddleware, (req,res) => {
    res.json({
        message : "All the things loged succesfuly"
    })
})

app.put('/', assingMiddleware, (req,res) => {
    res.json({
        message : "All the things loged succesfuly"
    })
})

app.delete('/', assingMiddleware, (req,res) => {
    res.json({
        message : "All the things loged succesfuly"
    })
})










app.listen(port, () => console.log(`Example app listening on port ${port}!`))