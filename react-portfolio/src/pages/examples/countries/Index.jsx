import { Link } from 'react-router';

export default function Index(){
    return (
        <>
            <h1>All countries</h1>
            <p><Link to={`/examples/countries/1`} >Country 1</Link></p>
            <p><Link to={`/examples/countries/2`} >Country 2</Link></p>
            <p><Link to={`/examples/countries/3`} >Country 3</Link></p>
            <p><Link to={`/examples/countries/4`} >Country 4</Link></p>
            <p><Link to={`/examples/countries/5`} >Country 5</Link></p>
        </>
    );
}