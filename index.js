const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const Luxury = require('./models/Luxury')
const luxuryCarsController = require('./controllers/luxurycars')
const methodOverride = require('method-override')
const path = require('path')
//const passport = require('passport')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('.'))
app.use(methodOverride('_method'))
//require('./config/passport')(passport)
//app.use(passport.initialize())
//app.use(passport.session())

app.get('/', (req, res) => {
  Luxury.find({}).then(function (cars) {
    res.render('index', { cars })
  })
})

app.use('/luxurycars', luxuryCarsController)
// start our server
app.listen(3000, () => console.log('This is working...Project 2'))
