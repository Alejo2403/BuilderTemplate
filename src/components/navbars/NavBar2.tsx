import React from 'react'

import "../../assets/styles/NavBars.css"

const NavBar2 = () => {
  return (
    <nav className="navbar navbar-2">
        <ul className="links">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Blog</li>
        </ul>
        <div className="logo">
            <img src="/logo-lomi.png" className="logo-navbar"  alt="logo" />
        </div>
        <button className="btn">Ver más</button>
    </nav>
  )
}

export default NavBar2