import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./team-data/components/AppNavBar";
import Home from './team-data/pages/Home';
import Team from './team-data/pages/Team';
import TeamDetails from './team-data/pages/TeamDetails';

function App() {
  const team = [
    {
        id: 1,
        first_name: 'Cesar',
        last_name: 'Francisco',
        email: 'princexcesar@gmail.com',
        role: 'Admin'
    },
    {
        id: 2,
        first_name: 'Kathleen Ann',
        last_name: 'Garcia',
        email: 'kalits23@gmail.com',
        role: 'Admin'
    },
    {
        id: 3,
        first_name: 'Luan Akio',
        last_name: 'Francisco',
        email: 'luan.akio@gmail.com',
        role: 'User'
    },
];

  return (
    <Router>
      <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team team={team} />} />
          <Route path="/team/:id" element={<TeamDetails team={team} />} />
        </Routes>
    </Router>
  )
}

export default App
