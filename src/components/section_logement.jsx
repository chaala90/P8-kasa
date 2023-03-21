import React, { useState, useEffect } from "react"
import "../pages/ficheLogement.css"
import RatingStars from "./rating"
import Collapse_logement from "../components/collapse_logement"
import Collapse_logement2 from "../components/collapse_logement2"

const Sectionlogement = ({
  ratingStars,
  title,
  description,
  hostname,
  hostpicture,
  rating,
  location,
  pictures,
  equipments,
  tags,
}) => {
  /*const [appart, setappart] = useState([])
  useEffect(fetchLogement, [])

  function fetchLogement() {
    fetch("logement.json")
      .then((response) => response.json())
      .then((response) => setappart(response))
      .catch(console.error)
  }*/
  return (
    <>
      <div className="rowTitle">
        <div>
          <h1>{title}</h1>
          <h2>{location}</h2>
          {tags && tags.map((tag, index) => <button key={index}>{tag}</button>)}
        </div>
        <div className="column">
          <div className="rowstar">
            <h4>{hostname}</h4>
            <img className="badge" src={hostpicture} alt="badge" />
          </div>
          <RatingStars ratingStars={ratingStars} />
          {/* <div className="rowstar">
          <i className="fa-solid fa-star redstar"></i>
          <i className="fa-solid fa-star redstar"></i>
          <i className="fa-solid fa-star redstar"></i>
          <i className="fa-solid fa-star greystar"></i>
          <i className="fa-solid fa-star greystar"></i>
  </div>*/}
        </div>
      </div>

      <div className="rowcollapse">
        <Collapse_logement />
        <Collapse_logement2 />
      </div>
    </>
  )
}

export default Sectionlogement
