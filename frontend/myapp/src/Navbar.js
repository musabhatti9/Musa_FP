import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand text-dark" to="/"> <h1>FIT.</h1> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link text-dark" to="/articles">Articles</Link>
                            <Link className="nav-link text-dark" to="/diet">Diet</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar