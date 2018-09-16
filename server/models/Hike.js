const mongoose = require('mongoose')

const HikeSchema = new mongoose.Schema({
  coordinates: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  admin: {
    type: String,
    default: ''
  },
  joining: {
    type: Array,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

HikeSchema.index({ '$**': 'text' })

// [{ type : ObjectId, ref: 'User' }], maybe this for user??

module.exports = mongoose.model('Hike', HikeSchema)
