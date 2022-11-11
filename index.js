const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
require('dotenv').config()





app.use('/users', userRoutes)
app.use('/api/notes', noteRoutes)
app.get('/',(req,res)=>{
  res.send('You are successfully Connected to the server')
})


const PORT = process.env.PORT||5000
app.listen(process.env.PORT||5000, () => {
  console.log('I AM RUNNING ON PORT', PORT)
})

const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}, err=>{
  if(err)throw err;
  console.log('Connected to mondodb')
})