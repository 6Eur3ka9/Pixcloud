const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    userImage: {
        url: { //url (soit l'image)
            type: String,
            name: String,
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
    }
});

module.exports = mongoose.model('Image', ImageSchema);

/*const db = client.db(Pixcloud);

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
    //On déclare une fonction nommée uploadImageFileToMongo pour gérer l'envoi de fichier vers MongDB avec GridFS
    function uploadImageFileToMongo() {
        DEF.mongo.gridfsUploadStream = async function(file, bucketName, metadata, fileType, id = undefined, malwareChecks = true) { //Définit une fonction gridfsUploadStream à l'intérieur d'un objet DEF.mongo

            //GridFSBucket est une classe de MongoDB qui permet de stocker et récupérer des fichiers dans MDB en chunks (soit les découpant en morceaux)
            let bucketName = new mongo.GridFSBucket('Pixcloud', {bucketName: pixcloudImagesBucket}) //On créé un GridFSBucket avec le nom de la DB (ici Pixcloud) et le nom du bucket (ici pixcloudImagesBucket). Cela permet de gérer des fichiers dans un bucket spécifique de GridFS

            //La variable stream_options définit les options à utiliser pour l'upload, tel que les métadonnées (metadata) et le type de contenu du fichier (fileType)
            const stream_options = {metadata : metadata, contentType: fileType};

            let uploadStream = undefined;

            //La méthode openUploadStreamWithId est utilisée pour ouvrir un fichier dans MongoDB avec un id spécifique ainsi que le nom du fichier
            uploadStream = bucket.openUploadStreamWithId(id, file.filename, stream_options); //stream_options sont les options associées au fichier
        
            try {
                //La promesse retournée est attendue, cela signifie que l'exécution du reste du code est suspendue tant que la promesse n'est pas résolue ou rejetée
                await function() {
                    return new Promise((resolve, reject) => {
                        //pipe est utilisé pour gérer du flux de donnée de façon efficace dans Node.js
                        file.pipe(uploadStream).on('finish', resolve).on('error', reject); //Lorsque l'upload est terminé (.on('finish')) la promesse est résolue. Cependant si une erreur se produit lors de l'upload, la promesse est rejetée
                    });
                }();

                return { ok: true }; //Si l'envoi se termine avec succès, on retourne un objet (indiquant que l'envoi est bien un succès)

            } catch (e) {
                console.error(e, 'An error has occured'); //Si une erreur se produit, celle-ci est attrapée et un message d'erreur est affiché dans la console
            }
        };
    }
});*/