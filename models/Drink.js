const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  caffeine: {
    type: Boolean,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Drink', coffeeSchema);