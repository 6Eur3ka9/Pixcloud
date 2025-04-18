import React, { useState } from 'react';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { UserService } from '../service/user.service';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ForgotPage = () => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    console.log('email', email);
    
    try {
      // 1) Appel au backend pour générer le resetLink
      const response = await UserService.resetPassword({ email });
      const { resetLink } = response.data;

      if (!resetLink) {
        setErrorMsg("Cette adresse e‑mail n'est pas enregistrée.");
        return;
      }

  

      const templateParams = {
        email:    email,
        link:  resetLink,
        
      };

      // 3) Envoi de l’e‑mail
      await emailjs.send(
        'service_m7tn7qm',     // ton Service ID
        'template_hsl2gya',    // ton Template ID
        templateParams,
        'uB3i9PiE0trULyXan'    // ton User ID
      );

      setSuccessMsg('✅ Un e‑mail de réinitialisation a été envoyé. Consultez votre boîte de réception.');
      setEmail('');
    }
    catch (err) {
      console.error(err);
      setErrorMsg("❌ Impossible de traiter votre demande. Réessayez plus tard.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
      <Nav />
      <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-6">Mot de passe oublié</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse e‑mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:outline-none focus:ring-[#A406FF] focus:border-[#A406FF]"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {errorMsg && (
              <div className="mb-4 text-red-600 text-sm text-center">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="mb-4 text-green-600 text-sm text-center">
                {successMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#A406FF]/50 text-white font-semibold rounded-md shadow-md
                         hover:bg-[#A406FF] focus:outline-none focus:ring-2 focus:ring-[#A406FF] focus:ring-opacity-50"
            >
              Envoyer le lien de vérification
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPage;
