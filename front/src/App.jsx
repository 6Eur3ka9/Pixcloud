import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './routes/mainPage';
import LoginPage from './routes/loginPage';
import Sign from './routes/Sign';
import { UserProvider } from './service/context.provider';
import CloudPage from './routes/CloudPage';
import EditPage from './routes/EditPage';
import PublicRoute from './service/PublicRoute'; // ou dans votre dossier service
import LegalMentions from './routes/LegalMentions';
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        position: 'fixed',
        width: '100%',
      }}
    >
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PublicRoute><MainPage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/register" element={<Sign />} />
            <Route path="/mainpage" element={<CloudPage />} />
            <Route path="/legalmentions" element={<LegalMentions />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;