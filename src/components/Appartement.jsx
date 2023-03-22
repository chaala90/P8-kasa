import React from "react"
import "./Appartement.css"
import { Link } from "react-router-dom"
function Appartement(props) {
  return (
    <div className="Appartement">
      <Link to={`/Logement/${props.id}`}>
        <img src={props.imageURL} alt={props.title} />
        <div className="titre">{props.title}</div>
      </Link>
    </div>
  )
}
export default Appartement
