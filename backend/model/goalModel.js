const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
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