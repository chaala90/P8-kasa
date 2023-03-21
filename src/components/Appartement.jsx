import React from "react"
import "./Appartement.css"
import { NavLink } from "react-router-dom"
function Appartement(props) {
  return (
    <div className="Appartement">
      <NavLink to={`/Logement/${props.id}`}>
        <img src={props.imageURL} alt={props.title} />
        <div className="titre">{props.title}</div>
      </NavLink>
    </div>
  )
}
export default Appartement
