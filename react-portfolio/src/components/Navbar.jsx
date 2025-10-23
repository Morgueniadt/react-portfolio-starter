// src/components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        padding: '10px 20px',
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #ddd',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
        🌍 Country Explorer
      </Link>
    </nav>
  );
}
