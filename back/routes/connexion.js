const express = require('express')
const User = require('../models/User');
const UserService = require('../models/')
const app = express() //L'app va exécuter la function express
const cors = require('cors');

const getUser = multer({ storage: storage }); //Je range l'utilisateur dans le storage ??
const user = await User.findOne({ name: req.body.name });

axios.get('http://localhost:3000/users')

app.use(cors());

app.get('/users', (req, res) => { //J'attends une requête et une réponse
    req.json(User.findOne({ name: req.body.name }));
    res.json(user);
})

//Ici on va vérifier si le mot de passe et le nom donnés correspondent à un profil enregistré dans la DB
app.post('/users/login', async (req, res) => {
    //On essaye de trouver un utilisateur avec le nom donné dans la requête
    const user = user.find(user => user.name === req.body.name) //Si un nom d'utilisateur est égal à celui demandé dans la requête, alors...

    //On vérifie quand même si il existe bel et bien :
    if(user == null) {
        return res.status(400).send('This user doesn\'t exist. Please sign in.') //Si l'utilisateur n'existe pas, on renvoie une erreur (res = response)
    }
    try {
        //On vérifie ensuite si le mot de passe donné dans la requête est le même que celui enregistré dans le profil (user.password = mot de passe hashé)
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Successfully logged in') //Si c'est le cas, on envoie une réponse positive à l'utilisateur
        } else {
            res.send('Incorrect password') //Si c'est pas le cas, on envoie une réponse négative
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000) //L'app va s'exécuter sur le serveur 3000


module.exports = router;