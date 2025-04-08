const express = require('express')
const app = express() //L'app va exécuter la function express

const getUser = multer({ storage: storage }); //Je range l'utilisateur dans le storage ??

app.get('/users', (req, res) => { //J'attends une requête et une réponse
    res.json(user)
})

//Ici on va vérifier si le mot de passe et le nom donnés correspondent à un profil enregistré dans la DB
app.post('/users/login', async (req, res) => {
    //On essaye de trouver un utilisateur avec le nom donné
    const user = user.find(user => user.name === req.body.name) //Si un nom d'utilisateur est égal à celui demandé dans la requête, alors...

    //On vérifie quand même si il existe bel et bien
    if(user == null) {
        return res.status(400).send('This user doesn\'t exist. Please sign in.')//Si l'utilisateur n'existe pas, on renvoie une erreur (res = response)
    }
})

app.listen(3000) //L'app va s'exécuter sur le serveur 3000