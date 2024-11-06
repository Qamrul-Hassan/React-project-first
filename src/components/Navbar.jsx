import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/" className="navbar-brand">Consult</a>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
