// importing our dependencies
const express = require('express')
const router = express.Router()
const Luxury = require('../models/Luxury')

router.get('/', (req, res) => {
  Luxury.find({}).then(function (cars) {
    res.render('luxurycars/index', { cars })
  })
})

//creat edit path
router.get('/edit', (req, res) => {
    res.render('luxurycars/edit')
})

// render new inventory form
router.get('/new', (req, res) => {
  res.render('luxurycars/new')
})

// new post add to inventory and
router.post('/', (req, res) => {
  Luxury.create({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  }).then(cars => {
    res.redirect('/luxurycars')
  })
    .catch(err => console.log('it\'s not adding the new inventory'))
})

// show detail
router.get('/:id', (req, res) => {
  Luxury.findOne({ _id: req.params.id })
    .then(cars => {
      res.render('luxurycars/show', cars)
    })
    .catch(err => console.log('oh oh problem with showing details'))
})

// edit
router.get('/edit/:id', (req, res) => {
  Luxury.findOne({ _id: req.params.id })
    .then(cars => {
        res.render('luxurycars/edit', cars)
    })
      .catch(err => console.log(err))
});

//edit & update
router.put('/:id', (req, res) => {
  Luxury.findOneAndUpdate({_id: req.params.id},
    { make: req.body.make,
      model: req.body.model,
      year: req.body.year
    },
    { new: true})
  .then(cars => {
    res.redirect('/luxurycars')
    })
})

//delete
router.delete('/edit/:id', (req, res) => {
  Luxury.findOneAndRemove({ _id: req.params.id })
  .then(cars => {
    res.redirect('/luxurycars')
  })
})

// export our router
module.exports = router
