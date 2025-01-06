const express = require('express')
const app = express();
const fs = require('fs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'thisismysecret'
const port = 3000
const filepath = __dirname + '/users.json'
app.use(express.json());
app.use(cors())

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
          if (err) {
              res.status(401).send({
                  message: "Unauthorized"
              })
          } else {
              req.user = decoded;
              next();
          }
      })
  } else {
      res.status(401).send({
          message: "Unauthorized"
      })
  }
}


// For signuping the user 
app.post('/signup', (req, res) => {
  const username = req.body.username
  const password = req.body.password


    // Read existing users from the file
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).json({
        message: 'Internal Server Error'
      })
    }

    let users = []
    if (data) {
      users = JSON.parse(data)
    }


    // making the js object of credentials 
    users.push({
      username: username,
      password: password
    })


    // Write the updated users array back to the file
    fs.writeFile(filepath, JSON.stringify(users), err => {
      if (err) {
        console.log(err)
        res.status(500).json({
          message: 'Internal Server Error'
        })
      }
      console.log(users)
      res.status(200).json({
        message: 'User created'
      })
    })
  })
})


// for token dstribution while login
app.post('/signin', (req, res) => {

    const {username, password} = req.body;
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          message: 'Internal Server Error'
        })
      }
  
      let users = []
      if (data) {
        users = JSON.parse(data)
      }
  
      const user = users.find(user => user.username === username)
      if (!user || String(user.password) !== String(password)) {
        return res.status(401).json({
          message: 'Invalid credentials'
        })
      }
  
      const token = jwt.sign({ username: username }, JWT_SECRET)
      return res.status(200).json({
        token: token
      })
    })


})


app.get("/me",auth, (req,res) => {
  const user = req.user;
  res.send({
    username : user.username
  })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
