import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { UserService } from "../service/user.service";

function Sign() {

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    {/*Cette fonction va servir à changer la valeur de setUsername à chaque fois que des nouvelles données sont saisies*/}
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            password: password,
        };
        console.log(data);
        UserService.resgister(data)
            .then((response) => {
                console.log(response);
                if(response.status === 201){
                    window.location.href = '/mainpage';
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
    <Navbar />
    <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
    
    <div className="flex justify-center">

        <form onSubmit={handleRegister} action="POST" className="bg-white border-[0.5px] w-105 h-115 rounded-lg m-6">
            <label className=" flex justify-center mb-12 mt-6 font-bold">INSCRIPTION</label>
            {/*
            - Ici je fais en sorte que value ai la variable username comme valeur.
            - Puis je lui ajoute un onChange contenant la fonction handleUsernameChange pour que la valeur de mon input change si l'utilisateur entre des nouvelles données (voir dans la console)
            */}
            <input className=" flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80" type="text" placeholder="Nom d'utilisateur" value={username} onChange={handleUsernameChange} required/>
            <input className=" flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80" type="email" placeholder="Adresse mail" value={email} onChange={handleEmailChange} required/>
            <input className="flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80" type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} required/>

            <a href="./login" className="flex justify-end font-medium mb-12 mt-6 mr-13">Déjà un compte ?</a>

            <input className="flex justify-center mb-12 m-auto font-medium bg-purple-400 pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out" type="submit" value="Inscription" />
        </form>
    </div>
    </div>
    <Footer />
    </div>
)}

export default Sign