import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountryShow() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(response => {
        setCountry(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>;// basically if the country aint found print the error

  return (
    <div style={{ padding: '20px' }}> 
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p> 
      <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
      <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
}// helps break down the figure with operateers so its 1,234,567 instead of 1234567
//Converts array of time zone strings into a comma-separated string
// currencies and languages are objects so we use object.values to get an array of the values and then map over them to get the names and join them into a string