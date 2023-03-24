import React, { useState } from "react"
import "../pages/ficheLogement.css"
function Collapse_logement2() {
  const [showContent, setShowContent] = useState(false)

  const handleToggle = () => {
    setShowContent(!showContent)
  }
  return (
    <div className="bloc_descri">
      <div className="half" onClick={handleToggle}>
        <h3>Équipements</h3>
        {showContent ? (
          <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
        ) : (
          <i className="fa-solid fa-chevron-up ClickToHide" />
        )}
      </div>
      {showContent && (
        <p className="description rowcollapse">
          Climatisation <br />
          Wi-Fi <br />
          Cuisine <br />
          Espace de travail <br />
          Fer à repasser <br />
          Sèche-cheveux <br />
          Cintres
        </p>
      )}
    </div>
  )
}
export default Collapse_logement2
