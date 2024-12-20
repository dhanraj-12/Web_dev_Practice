const  express = require('express')
const app = express()
const port = 3000

let users = [
    {
        id : "Jhon",
        kidneys : [{
            healthy: false
        }]
    }
]

app.use(express.json());


// URL --> http://localhost:3000/info/Jhon
app.get('/info/:id', (req, res) => {
    const username = req.params.id;
    const user = users.find(user => user.id == username);

    if(!user) {
        return res.status(404).json({error : "user not found"})
    }
    const numberofkidney = user.kidneys.length;
    const healthykidneys = user.kidneys.filter(healthy => healthy == true);
    const numberofheealthykidney = healthykidneys.length;
    const numberofunhealthykidneys = numberofkidney-numberofheealthykidney;
    res.json({
        numberofkidney,
        numberofheealthykidney,
        numberofunhealthykidneys,
    })
})

// URL --> http://localhost:3000/new/Jhon

app.post("/new/:id", (req,res) => {
    const username = req.params.id;
    const user = users.find(user => user.id == username);
    const { healthy } = req.body;
    
    if(!user) {
        return res.status(404).json({error : "user not found"})
    }

    if(typeof(healthy) != "boolean") {
        return res.status(400).json({error : "invalide input"});
    }

    user.kidneys.push(healthy);
    res.json({
        message: "kidney added succesfully",
    })
})


// URL --> http://localhost:3000/update/Jhon

app.put("/update/:id", (req,res) => {
    const username = req.params.id;
    const user = users.find(user => user.id == username);
    if(!user) {
        return res.status(404).json({error : "user not found"})
    }

    const newkidney  = user.kidneys.map(healthy => ({healthy: true}));
    user.kidneys = newkidney;
    res.json({
        message : "all kidneys are updated to healthy kidney",
        kidneys: user.kidneys
    })
})

// URL --> http://localhost:3000/delete/Jhon
app.delete("/delete/:id",(req,res) => {
    const username = req.params.id;
    const user = users.find(user => user.id == username);
    if(!user) {
        return res.status(404).json({error : "user not found"})
    }

    const newkidney = user.kidneys.filter(healthy => healthy == true);
    user.kidneys = newkidney;
    res.json({
        message: "all unhealthy kidney are delted",
        kidneys : user.kidneys
    })
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))

