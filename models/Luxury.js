
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
  }
})

const Luxury = mongoose.model('Luxury', LuxurycarsSchema)

module.exports = Luxury