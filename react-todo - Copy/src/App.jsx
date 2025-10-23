// src/App.jsx
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import PageNotFound from "./pages/PageNotFound";
import NavigateExample from "./pages/example/NavigateExample";
import AlbumsIndex from './pages/example/albums/index'; // Fixed typo: albums

import BackgroundRotator from "./components/BackgroundRotator";

import './assets/app.css';

export default function App() {
  return (
    <Router>
      <BackgroundRotator /> {/* Background rotating images */}
      
      <Navbar bg="light" expand="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4" style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navigate" element={<NavigateExample />} />
          <Route path="/books" element={<AlbumsIndex />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}
