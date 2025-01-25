const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./auth')
const cors = require('cors')
const key = require('./db_key')
const port = 3000

app.use(express.json())
app.use(cors())

async function conn () {
  try {
    await mongoose.connect(
      key
    )
    console.log('Connected to MongoDB successfully!')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}

conn()

app.post('/signup', async (req, res) => {
  const user = req.body.username
  const email = req.body.useremail
  const password = req.body.password

  await UserModel.create({
    name: user,
    email: email,
    password: password
  })

  res.json({
    message: 'Succesfully signup in'
  })
})

app.post('/singin', async (req, res) => {
  try {
    const email = req.body.useremail
    const password = req.body.password

    const response = await UserModel.findOne({
      email: email,
      password: password
    })

    if (!response) {
      return res.status(403).json({ message: 'Incorrect credentials' })
    }

    const token = jwt.sign(
      {
        id: response._id.toString()
      },
      JWT_SECRET,
      {
        expiresIn: '1h'
      }
    )

    res.status(200).json({
      token,
      message: 'Login Sucesfully'
    })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
