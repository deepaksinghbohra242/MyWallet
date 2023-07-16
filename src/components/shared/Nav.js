import React from 'react'
import { Link } from 'react-router-dom'
function Nav() { 
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" >
                <button className="btn btn-primary mx-2" type="button">Home</button>
                    </ Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/dashboard'><button className="btn btn-primary " type="button">Dashboard</button></Link>
                        

                
                        </ul>
                        <div className ="mx-2">
                            <button className="btn btn-primary " type="button">Sign up</button>
                        </div>
                        <div className = "mx-2">
                            <button className="btn btn-success " type="button">Login</button>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
