const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/luxurycars')
}
// mongoose.connect('mongodb://localhost/luxurycars')               // for home work use yum instead of todo

mongoose.Promise = Promise

module.exports = mongoose
