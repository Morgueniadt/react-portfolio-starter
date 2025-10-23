// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
