import {useLocation} from 'react-router'

export default function PageNotFound() 
{
    let location = useLocation();
    return(
        <div>
            <h2>Sorry, 404 the page {location.pathname}was not found</h2>
        </div>
    )
}