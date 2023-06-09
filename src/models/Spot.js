const mongoose = require('mongoose')
const SpotSchema = new mongoose.Schema({

    thumbnail: String,
    company: String,
    price: String,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, // fk
        ref: 'User'
    }

}, {
  toJSON: {
    virtuals: true
  }
})

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://192.168.100.13:3333/files/${this.thumbnail}`;
})

module.exports = mongoose.model('Spot', SpotSchema)
