const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/luxurycars')               // for home work use yum instead of todo

mongoose.Promise = Promise

module.exports = mongoose
