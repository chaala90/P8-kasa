import React, { useState } from "react"
import "../pages/ficheLogement.css"
function Collapse_logement({ title, description }) {
  const [showContent, setShowContent] = useState(false)

  const handleToggle = () => {
    setShowContent(!showContent)
  }
  return (
    <div className="bloc_descri">
      <div className="half" onClick={handleToggle}>
        <h3>{title}</h3>
        {showContent ? (
          <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
        ) : (
          <i className="fa-solid fa-chevron-up ClickToHide" />
        )}
      </div>

      {showContent && <p className="description rowcollapse">{description}</p>}
    </div>
  )
}
export default Collapse_logement
