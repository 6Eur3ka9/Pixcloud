import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Connexion() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

return <>
    <Navbar />
    <section className="bg-linear-to-t from-fuchsia-100 to-purple-300">
    <div className="flex justify-center">

        <form action="POST" className="bg-pink-50 w-105 h-115 rounded-lg m-6">
            <label className="block flex justify-center mb-12 mt-6 font-bold">CONNEXION</label>
            {/*
            - Ici je fais en sorte que value ai la variable username comme valeur.
            - Puis je lui ajoute un onChange contenant la fonction handleUsernameChange pour que la valeur de mon input change si l'utilisateur entre des nouvelles données (voir dans la console)
            */}
            <input className="block flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80" type="email" placeholder="Adresse mail" value={email} onChange={handleEmailChange} required/>
            <input className="block flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80" type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} required/>

            <a href="./Connexion.jsx" className="flex justify-end font-medium mb-6 mt-6 mr-13">Mot de passe oublié ?</a>
            <a href="./Sign.jsx" className="flex justify-end font-medium mb-6 mt-6 mr-13">Pas de compte ? Créez en un</a>

            <input className="flex justify-center mt-16 m-auto font-medium bg-purple-400 pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out" type="submit" value="Se connecter" />
        </form>
    </div>
    </section>
    <Footer />
    </>
}

export default Connexion