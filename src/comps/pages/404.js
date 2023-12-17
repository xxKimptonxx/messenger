import React from 'react';
import { Link } from 'react-router-dom';
import "../../page.scss"

function PageNotFound() {
    return ( 
    <div className='page'>
        <h1>Opps! PAge Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to={'/'}><button type="button">Go Back Home</button></Link>
    </div>
    );
}

export default PageNotFound;