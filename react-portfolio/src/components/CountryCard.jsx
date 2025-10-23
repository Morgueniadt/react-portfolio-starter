
import { Link } from 'react-router-dom';

export default function CountryCard({ flag, name, capital, currency }) {
  return (
    <Link to={`/country/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          width: '200px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          textAlign: 'center',
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
        <p><strong>Capital:</strong> {capital || 'N/A'}</p>
      </div>
    </Link>
  );// link up top allows the card to be clicekd and transfer to show page
}
