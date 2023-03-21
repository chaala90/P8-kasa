import React, { useState } from "react"
import "../pages/ficheLogement.css"
function Collapse_logement() {
  const [showContent, setShowContent] = useState(false)

  const handleToggle = () => {
    setShowContent(!showContent)
  }
  return (
    <div className="bloc_description">
      <div className="half" onClick={handleToggle}>
        <h3>Description</h3>
        {showContent ? (
          <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
        ) : (
          <i className="fa-solid fa-chevron-up ClickToHide" />
        )}
      </div>

      {showContent && (
        <p className="description rowcollapse">
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de
          la gare de l'est (7 minutes à pied).
        </p>
      )}
    </div>
  )
}
export default Collapse_logement
