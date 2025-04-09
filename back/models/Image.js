const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image: {
        format: ['.jpeg', '.png', '.pdf'],
        unique: false,
    },
    upload_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Image', ImageSchema);