import React from "react"
import { Link } from "react-router-dom"
import "./404Page.css"

function ErrorPage() {
  return (
    <div className="errorPage">
      <img src="404.png" alt="404page" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/Accueil">Retourner sur la page d’accueil</Link>
    </div>
  )
}
export default ErrorPage
