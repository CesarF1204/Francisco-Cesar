import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./team-data/components/AppNavBar";
import Home from './team-data/pages/Home';
import Team from './team-data/pages/Team';

function App() {
  return (
    <Router>
      <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
    </Router>
  )
}

export default App
