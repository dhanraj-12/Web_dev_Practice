const core = require("cors")
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(core())

app.post('/sum', (req, res) => { 
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+b);
    res.json({
        sum : a+b
    })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))