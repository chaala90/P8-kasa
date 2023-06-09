import React, { useState } from "react"
import "./DescriptionAbout.css"

function Fiabilité() {
  const [showContent, setShowContent] = useState(false)

  const handleToggle = () => {
    setShowContent(!showContent)
  }

  return (
    <div className="bloc_description">
      <div className="TitleAbout" onClick={handleToggle}>
        <h2>Fiabilité</h2>
        {showContent ? (
          <i className="fa-sharp fa-solid fa-chevron-down" />
        ) : (
          <i className="fa-solid fa-chevron-up" />
        )}
      </div>
      {showContent && (
        <p className="description_content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      )}
    </div>
  )
}

export default Fiabilité
