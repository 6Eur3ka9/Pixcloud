const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageIdSchema = new Schema({
    user: {
        image: {
            type: ['.jpg', '.jpeg', '.png'],
            _id: id,
            required: true,
            unique: true,
        },
        uploaded_at: {
            type: Date,
            default: Date.now,
        },
    }
});

module.exports = mongoose.model('ImageId', ImageIdSchema);