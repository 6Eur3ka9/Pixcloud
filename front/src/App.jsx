import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './routes/mainPage';






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
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
