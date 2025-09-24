import "../../assets/styles/NavBars.css"

const NavBar3 = () => {
  return (
    <nav className="navbar navbar-3">
      <ul className="links">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Blog</li>
      </ul>
        <button className="btn">Ver más</button>
        <div className="logo">
            <img src="/logo-lomi.png" className="logo-navbar" alt="logo" />
        </div>
    </nav>
  )
}

export default NavBar3