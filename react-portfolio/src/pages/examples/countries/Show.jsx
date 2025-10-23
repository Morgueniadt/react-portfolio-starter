import { useParams } from 'react-router';

export default function Show(){

    let { id } = useParams();

    return (
        <>
            <h1>Hello from Countrys / Show page</h1>
            <p>You are looking at country with id: {id}</p>
        </>
    );
}