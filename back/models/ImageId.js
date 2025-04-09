const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageIdSchema = new Schema({
  image: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  uploaded_at: {
    type: Date,
   
    default: Date.now,
  },
}); 

module.exports = mongoose.model('ImageId', ImageIdSchema);