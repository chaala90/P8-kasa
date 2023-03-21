import React, { useState } from "react";
import "./DescriptionAbout.css";

function Service() {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="bloc_description">
      <div className="TitleAbout" onClick={handleToggle}>
        <h2>Service</h2>
        {showContent ? (
            <i className="fa-sharp fa-solid fa-chevron-down ClickToShow" />
          
        ) : (
            <i className="fa-solid fa-chevron-up ClickToHide" />
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
  );
}

export default Service;