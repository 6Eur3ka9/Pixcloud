const express = require('express')
const app = express() //L'app va exécuter la function express

const getUser = multer({ storage: storage });

app.get('/users', (req, res) => { //J'attends une requête et une réponse
    res.json(user)
})

app.listen(3000) //L'app va s'exécuter sur le serveur 3000