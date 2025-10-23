import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CountryCard({ flag, name, capital, currency }) {
  return (
    <Link
      to={`/country/${encodeURIComponent(name)}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
        transition={{ duration: 0.3 }}
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          width: '200px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: '#fff',
        }}
      >
        <img
          src={flag}
          alt={`Flag of ${name}`}
          style={{
            width: '100%',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '4px',
          }}
        />
        <h3>{name}</h3>
        <p>
          <strong>Capital:</strong> {capital || 'N/A'}
        </p>
        {currency && (
          <p>
            <strong>Currency:</strong> {currency}
          </p>
        )}
      </motion.div>
    </Link>
  );
}
