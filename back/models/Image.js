const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = client.db(Pixcloud);

//https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/

//Cette variable initialise un bucket GridFS, qui va stocker et récupérer des fichiers dans la DB Pixcloud (voir variable si-dessus)
const bucket = new mongodb.GridFSBucket(db, { //GridFS est un système de fichiers qui sert à stocker des fichiers volumineux sur MongoDB
    bucketName: 'imagesBucket' //Le nom du bucket est 'imagesBucket'
});

const mongoClient = new mongo.MongoClient(URI, { //Cette constante va être utilisée pour ce connecter à la base de donnée (ici MongoDB) en utilisant l'url de connexion: URI (défini dans un autre endroit du code)
    useNewUrlParser: true,
    useUnifiedTopology: true
});

fs.createReadStream('./imageFile').
pipe(bucket.openUploadStream('imageFile', {
    chunkSizeBytes: 1048576,
    metadata: { field: 'imageFile', value: 'myValue' }
}));






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