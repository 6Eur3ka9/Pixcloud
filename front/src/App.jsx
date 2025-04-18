import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './routes/mainPage';
import LoginPage from './routes/loginPage';
import Sign from './routes/Sign';
import { UserProvider } from './service/context.provider';
import CloudPage from './routes/CloudPage';
import EditPage from './routes/EditPage';
import PublicRoute from './service/PublicRoute';
import ContactPage from './routes/ContactPage';
import LegalMentions from './routes/LegalMentions';
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  overflow: 'hidden',
                  height: '100vh',
                  position: 'fixed',
                  width: '100%',
                }}
              >
                <PublicRoute>
                  <MainPage />
                </PublicRoute>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div
                style={{
                  overflow: 'hidden',
                  height: '100vh',
                  position: 'fixed',
                  width: '100%',
                }}
              >
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              </div>
            }
          />
          <Route
            path="/edit"
            element={
              <div
                style={{
                  overflow: 'hidden',
                  height: '100vh',
                  position: 'fixed',
                  width: '100%',
                }}
              >
                <EditPage />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div
                style={{
                  overflow: 'hidden',
                  height: '100vh',
                  position: 'fixed',
                  width: '100%',
                }}
              >
                <Sign />
              </div>
            }
          />
          <Route
            path="/mainpage"
            element={
              <div
                style={{
                  overflow: 'hidden',
                  height: '100vh',
                  position: 'fixed',
                  width: '100%',
                }}
              >
                <CloudPage />
              </div>
            }
          />
          <Route path="/contact-us" element={
            <div
              style={{
               
                height: '100vh',
                
                width: '100%',
              }} >

                <ContactPage />
              </div>
             } />
          <Route path="/legalmentions" element={
            <div
              style={{
                overflow: 'hidden',
                height: '100vh',
                position: 'fixed',
                width: '100%',
              }}
            >
              <LegalMentions />
            </div>
          } />
          {<Route path="/aboutus" element={
            <div
              style={{
                overflow: 'hidden',
                height: '100vh',
                position: 'fixed',
                width: '100%',
              }}
            >
              <AboutUs />
            </div>
          } />}
        </Routes>
      
      </Router>
    </UserProvider>
  );
}

export default App;