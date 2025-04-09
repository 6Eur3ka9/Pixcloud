const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageIdSchema = new Schema({
    user: {
        image: {
            type: String,
            _id: id,
            required: true,
            unique: true,
            match: "/\.(jpg|jpeg|png)$/i",
        },
        uploaded_at: {
            type: Date,
            default: Date.now,
        },
    }
});

module.exports = mongoose.model('ImageId', ImageIdSchema);