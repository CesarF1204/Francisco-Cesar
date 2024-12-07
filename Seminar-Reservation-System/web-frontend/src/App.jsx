import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import AppNavbar from './components/AppNavbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateSeminar from './pages/CreateSeminar';
import SeminarDetails from './components/SeminarDetails';

function App() {
  const { isLoggedIn, data } =  useAppContext();

  return (
    <Router>
      {isLoggedIn && <AppNavbar user={data} />}
      <Routes>
        {/* Redirect to /dashboard if logged in, otherwise stay at / */}
        <Route path="/sign_in" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        
        {/* Protected route: only accessible if logged in */}
        {isLoggedIn && (
          <>
            <Route path="/dashboard" element={<Dashboard user={data} />} />
            <Route path="/seminar/:id" element={<SeminarDetails />} />
            {data.role === 'admin' && 
              <Route path="/create_seminar" element={<CreateSeminar />} />
            }
          </>
        )}
        
        {/* Public route */}
        <Route path="/register" element={<Register />} />
        
        {/* Fallback to home for undefined routes */}
        <Route path="*" element={<Navigate to="/sign_in" />} />
      </Routes>
    </Router>
  )
}

export default App
