import React, { useEffect, useState } from 'react';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { useUser } from '../service/context.provider';
import { UserService } from '../service/user.service';
import { useNavigate } from 'react-router-dom';


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
  
  const navigate = useNavigate();

//   useEffect(() => {
//     // Persistance dans le localStorage
//     if(connectedUserId && connectedUserToken && connectedUserPassword) {
//       localStorage.setItem('userId', connectedUserId);
//       localStorage.setItem('userToken', connectedUserToken);
//       localStorage.setItem('userPassword', connectedUserPassword);

//       // Vérifier si le token est toujours valide
//       try {
//         const decoded = jwtDecode(connectedUserToken);
//         if (decoded.exp * 1000 > Date.now()) {
//           navigate('/mainpage');
//         } else {
//           // Token expiré, on peut le nettoyer si nécessaire
//           localStorage.removeItem('userId');
//           localStorage.removeItem('userToken');
//           localStorage.removeItem('userPassword');
//         }
//       } catch(error) {
//         console.error("Erreur lors du décodage du token:", error);
//       }
//     }
//   }, [connectedUserId, connectedUserToken, connectedUserPassword, navigate]);

  const loginForm = (e) => {
    e.preventDefault();

    const data = { email, password };

    UserService.login(data)
      .then((response) => {
        // Sauvegarde des données dans le contexte
        setConnectedUserId(response.data.userId);
        setConnectedUserToken(response.data.token);
        setConnectedUserPassword(data.password);

        localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userToken' , response.data.token);
          localStorage.setItem('userPassword', data.password); 
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(email, password);
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
