import React from 'react'
import { Link } from 'react-router-dom'


function ErrorComponent() {
    return (
        <div>
            <h1>Error 404 </h1>
            <br />
            <h1>Not found</h1>
            <br />
            <button><Link to="/">Back to home</Link></button>
        </div>
    )
}

export default ErrorComponent
