
const mongoose = require('../db/connection')

const LuxurycarsSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  mileage: Number,
  img: String
})

const Luxury = mongoose.model('Luxury', LuxurycarsSchema)

module.exports = Luxury