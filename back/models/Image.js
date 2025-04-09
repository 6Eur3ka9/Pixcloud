const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = client.db(Pixcloud);

//https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/

const mongoClient = new mongo.MongoClient(URI, { //Cette constante va être utilisée pour ce connecter à la base de donnée (ici MongoDB) en utilisant l'url de connexion: URI (défini dans un autre endroit du code)
    useNewUrlParser: true,
    useUnifiedTopology: true //Cela active la 'gestion unifiée' du serveur, ça permet d'éviter d'avoir des erreurs à cause des anciens serveurs
});

mongo.connect(url, { //Initialise une connexion à MongoDB à l'addresse 'url' (définie ailleurs dans le code)
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err, client) => { //On utilise un fonction asynchrone (car contrairement à une fonction normale, elle retournera tjrs une promesse)
    if(err) {
        console.error(err); //Si une erreur se produit lors de la connexion, on affiche l'erreur dans la console...
        return; //Et la connexion est interrompue grâce à un return
    }
    //On déclare une fonction pour gérer l'envoi de fichier vers avec GridFS
    function uploadImageFileToMongo() {
        DEF.mongo.gridfsUploadStream = async function(file, bucketName, metadata, fileType, id = undefined, malwareChecks = true) {

            let bucketName = new mongo.GridFSBucket('Pixcloud', {bucketName: pixcloudImagesBucket})

            const stream_options = {metadata : metadata, contentType: fileType};

            let uploadStream = undefined;

            uploadStream = bucket.openUploadStreamWithId(id, file.filename, stream_options);
        
            try {
                await function() {
                    return new Promise((resolve, reject) => {
                        file.pipe(uploadStream).on('finish', resolve).on('error', reject);
                    });
                }();

                return { ok: true };

            } catch (e) {
                console.error(e, 'upload-500');
            }
        };
    }
});

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