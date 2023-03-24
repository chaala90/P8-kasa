import React from "react"
import { Link } from "react-router-dom"
import error from "../assets/images/404.png"
import "./404Page.css"

function ErrorPage() {
  return (
    <div className="errorPage">
      <img src={error} alt="404page" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/Accueil">Retourner sur la page d’accueil</Link>
    </div>
  )
}
export default ErrorPage
