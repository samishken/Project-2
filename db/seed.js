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



// Luxury.remove({}).then(() => {
//   Promise.all([
//     Luxury.create({
//       make: 'Rolls Royce',
//       model: 'Phantom Serenity'
//     }),
//     Luxury.create({
//       make: 'Ashton Martin',
//       model: 'One-77'
//     })
// }).then(() => {
//   console.log('done')
//   process.exit()
// })
