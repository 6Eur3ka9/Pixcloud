import mainPage from "../routes/mainPage.jsx"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from '../assets/logo.png'
import { useState, useEffect } from "react";
import { UserService } from '../service/user.service';

function LegalMentions() {

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
        <div className="bg-white p-5 w-4xl m-auto rounded-lg border-[0.5px]">
            <h1 className="text-center mb-5 font-bold">Mentions légales :</h1>

            <h2 className="mt-8 mb-4">Éditeur et responsable du contenu du site :</h2>
            <p className="mt-4 mb-4">Cette mention est valable pour tous les sites exploités par Pixcloud ainsi que pour tous les réseaux sociaux de Pixcloud.</p>

            <h3 className="mt-8 mb-4">Informations sur la société :</h3>

            <ul>
                <li className="mt-3">France</li>
                <li className="mt-3">Téléphone : +12 34 56 78 90</li>
                <li className="mt-3">E-mail : john.doe@gmail.com</li>
            </ul>

            <h3 className="mt-8 mb-4">Numéro d’identification de la société :</h3>
            <p >123456</p>

            <h3 className="mt-8 mb-4">Direction / représentée par :</h3>
            <p>John Doe</p>

            <a href="/mainpage" className="flex justify-center text-purple-400 hover:text-purple-600 font-medium mt-5">Revenir à la page principale</a>
        </div>
        <Footer />
    </div>
    )
}

export default LegalMentions;