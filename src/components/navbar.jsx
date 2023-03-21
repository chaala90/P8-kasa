import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="LOGO.png" alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/About" className="line">
        A Propos
      </NavLink>
    </nav>
  )
}
export default Navbar
