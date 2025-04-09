import React, { useEffect } from 'react';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import  { useState } from 'react';
import { useUser } from '../service/context.provider';
import { UserService } from '../service/user.service';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {
        connectedUserId,
        setConnectedUserId,
        connectedUserToken,
        setConnectedUserToken,
        connectedUserPassword,
        setConnectedUserPassword
    } = useUser();

    useEffect(() => {
        console.log("connectedUserId a été mis à jour :", connectedUserId , connectedUserToken, connectedUserPassword);

        let userId = localStorage.getItem('userId');
        let userToken = localStorage.getItem('userToken')
        if(userId || userToken ){
            localStorage.removeItem('userId');
            localStorage.removeItem('userToken')
        }else{
            localStorage.setItem('userId', connectedUserId);
            localStorage.setItem('userToken', connectedUserToken);
        }


      }, [connectedUserId, connectedUserToken, connectedUserPassword]);


    const loginForm = (e) => {
        e.preventDefault();
        

        const data = {
            email: email,
            password: password,
        };

        UserService
            .login(data)
            .then((response) => {
                console.log(response.data);
                console.log(data);
                
                setConnectedUserId(response.data.userId);
                setConnectedUserToken(response.data.token);
                setConnectedUserPassword(data.password);

                console.log(connectedUserId, connectedUserToken, connectedUserPassword);
                if(response.status === 200){
                    
                  window.location.href = '/mainpage';
                }
            })
            .catch((error) => {
                console.error(error);
            });


        console.log(email, password );
        
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
            <Nav />
            <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
                <div className="bg-white border-[0.5px] rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-center text-2xl font-semibold mb-6">Connexion</h2>
                    <form onSubmit={loginForm}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                adresse mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A406FF] focus:border-[#A406FF]"
                                placeholder="adresse mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A406FF] focus:border-[#A406FF]"
                                placeholder="mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <a href="#" className="text-sm text-[#A406FF] hover:underline">
                                mot de passe oublier?
                            </a>
                            <a href="/register" className="text-sm text-[#A406FF] hover:underline">
                                pas de compte ? creer un compte
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#A406FF]/50 text-white font-semibold rounded-md shadow-md hover:bg-[#A406FF] focus:outline-none focus:ring-2 focus:ring-[#A406FF] focus:ring-opacity-50"
                        >
                            se connecter
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );

  
};

export default LoginPage;