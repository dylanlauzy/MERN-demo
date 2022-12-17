const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text value']
    // unique: true
  }
}, {
  // creates updatedAt and createdAt fields automatically
  timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)