import { useParams } from 'react-router';

export default function Show(){
    let {} = useParams()
    return(
        <>
        <h1>hello from albums / index page</h1>
        </>
    )
}