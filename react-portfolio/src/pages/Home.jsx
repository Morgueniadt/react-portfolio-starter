import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard'; 

export default function Home() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=flags,name,capital')
      .then(response => {
        setCountriesList(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {countriesList.map((country, index) => (
          <CountryCard
            key={index}
            flag={country.flags?.png}
            name={country.name.common}
            capital={country.capital ? country.capital[0] : 'N/A'}
          />
        ))}
      </div>
    </div>
  );
}
