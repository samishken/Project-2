const express = require('express')
const hbs = require(‘hbs’) 
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/', (req, res) => {
  res.send('Project TWO')
})

// start our server
app.listen(3000, () => console.log('This is working...Project 2'))
