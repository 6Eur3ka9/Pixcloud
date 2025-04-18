import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { UserService } from '../service/user.service'; // adapte si tu utilises axios/fetch

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]     = useState('');
  const [errorMsg, setErrorMsg]   = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();
  const { search } = useLocation();

  // Extraire le token de l'URL
  const token = new URLSearchParams(search).get('token');

  useEffect(() => {
    if (!token) {
      setErrorMsg('Lien invalide ou manquant.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (password.length < 6) {
      setErrorMsg('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (password !== confirm) {
      setErrorMsg('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      // Appel à ton service ou fetch direct
      const payload = { token, password };
      await UserService.resetPasswordFinalize(payload);
      setSuccessMsg('✅ Mot de passe réinitialisé ! Vous pouvez vous connecter.');
      // Après 2s, rediriger vers /login
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err.response?.data?.error ||
        "❌ Impossible de réinitialiser le mot de passe."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
      <Nav />
      <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Réinitialiser mot de passe
          </h2>

          {!token ? (
            <p className="text-center text-red-600">Token manquant.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirm"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  required
                />
              </div>

              {errorMsg && (
                <div className="mb-4 text-red-600 text-sm text-center">{errorMsg}</div>
              )}
              {successMsg && (
                <div className="mb-4 text-green-600 text-sm text-center">{successMsg}</div>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#A406FF]/50 text-white font-semibold rounded-md shadow-md hover:bg-[#A406FF]"
              >
                Valider
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;
