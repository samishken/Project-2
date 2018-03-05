// importing our dependencies
const express = require('express')
const router = express.Router()
const Luxury = require('../models/Luxury')

router.get('/', (req, res) => {
  Luxury.find({}).then(cars => {
    res.render('luxurycars/index', { cars })
  })
})

router.get('/', (req, res) => {
  Luxury.find({}).then(function (cars) {
    res.render('index', { cars })
  })
})


router.get('/:id', (req, res) => {
  Luxury.findOne({ _id: req.params.id }).then(cars => {
    res.render('luxurycars/show', cars)
  })
})

// export our router
module.exports = router
