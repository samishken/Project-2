const Luxury = require('../models/Luxury')

const data = require('./seeds.json')

Luxury.remove({})
  .then(() => {
    console.log('passed')
    return Luxury.collection.insert(data)
  })
  .then(() => {
    process.exit()
  })
