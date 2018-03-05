const Luxury = require('../models/Luxury')


Luxury.remove({}).then(() => {
  Promise.all([
    Luxury.create({
      make: 'Rolls Royce',
      model: 'Phantom Serenity'
    }),
    Luxury.create({
      make: 'Ashton Martin',
      model: 'One-77'
    })
}).then(() => {
  console.log('done')
  process.exit()
})
