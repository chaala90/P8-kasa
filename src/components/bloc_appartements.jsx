import React, { useState, useEffect } from "react"
import "./bloc_appartements.css"
import Appartement from "../components/Appartement"

function Appartements() {
  const [logements, setLogements] = useState([])
  useEffect(fetchLogement, [])

  function fetchLogement() {
    fetch("logement.json")
      .then((response) => response.json())
      .then((response) => setLogements(response))
      .catch(console.error)
  }

  return (
    <div className="appartement__bloc">
      {logements.map((logement) => (
        <Appartement
          key={logement.id}
          title={logement.title}
          imageURL={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  )
}

export default Appartements
