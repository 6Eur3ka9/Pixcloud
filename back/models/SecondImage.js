const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const gridFsStorage = require('multer-gridfs-storage');
const grid = require('gridfs-stream');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(methodOverride('_method'));

const connection = mongoose.createConnection(MONGODB_URI); //Connection à la DB

let gfs; //Initialisation de GridFS

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));