const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = client.db(Pixcloud);
const bucket = new mongodb.GridFSBucket(db);

const ImageSchema = new Schema({
    image: {
        format: ['.jpeg', '.png', '.gif', '.svg', '.pdf'],
        unique: false,
    },
    upload_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Image', ImageSchema);