import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './routes/mainPage';
import LoginPage from './routes/loginPage';
import Sign from './routes/sign';
import { UserProvider } from './service/context.provider';
import CloudPage from './routes/CloudPage';






function App() {
  
  return (
    <>
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
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Sign />} />
            <Route path="/mainPage" element={<CloudPage />} />
          </Routes>
        </Router>
        </UserProvider>
      </div>
    </>
  )
}

export default App
