import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from '../assets/logo.png'
import { useState, useEffect } from "react";
import { UserService } from '../service/user.service';

function AboutUs() {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const userid = localStorage.getItem('userId');

        UserService.getUserById(userid)
          .then((response) => {
            setUsername(response.data.username);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
    <div className="min-h-screen flex justify-center flex-col bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
    {!username ? (
                <Navbar />
            ) : (
                <nav
                    className="bg-white text-black"
                    style={{ boxShadow: "0px -1px 7px 12px rgba(238, 26, 26, 0.8)" }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-18">
                            <div className="flex items-center">
                                <a href="/">
                                    <img src={logo} alt="Logo" className="h-22 mt-6" />
                                </a>
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href="/edit"
                                    className="font-bold text-xl hover:scale-110 duration-300 ease-in-out cursor-pointer"
                                >
                                    {username}
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        <div className="text-center bg-white p-5 w-4xl m-auto rounded-lg border-[0.5px]">
            <h1 className="text-center mb-5 font-bold">Qui sommes nous ?</h1>
            <p>Pixcloud est un projet étudiant réalisé dans le cadre de la formation "TP - Développeur Web" de l'AFEC.</p>
            <p>Pixcloud permet à ses utilisateurs de sauvegarder jusqu'à 100 photos dans un cloud sécurisé et facile d'utilisation.</p>
            <p>Ce projet a été réalisé par <a href="https://github.com/6Eur3ka9" target="_blank" className="text-blue-800 hover:underline">6Eur3ka9</a> et <a href="https://github.com/Luna-bf" target="_blank" className="text-blue-800 hover:underline">Luna-bf</a>.</p>

            <a href="/mainpage" className="flex justify-center text-purple-400 hover:text-purple-600 font-medium mt-5">Revenir à la page principale</a>
        </div>
    <Footer />
    </div>
    )
}

export default AboutUs;