import React from 'react'

import "../../assets/styles/NavBars.css"

const NavBar1 = () => {
  return (
    <nav className="navbar navbar-1">
      <div className="logo">
        <img src="/logo-lomi.png" className="logo-navbar" alt="logo" />
      </div>
      <ul className="links">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Blog</li>
      </ul>
      <button className="btn">Ver más</button>
    </nav>
  )
}

export default NavBar1