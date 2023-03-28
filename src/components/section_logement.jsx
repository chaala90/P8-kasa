import React from "react"
import "../pages/ficheLogement.css"
import RatingStars from "./rating"
import CollapseLogement from "./collapseLogement"
import CollapseLogement2 from "./collapseLogement2"

const Sectionlogement = ({
  ratingStars,
  title,
  description,
  hostname,
  hostpicture,
  location,
  pictures,
  equipments,
  tags,
}) => {
  return (
    <>
      <div className="rowTitle">
        <div>
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="button">
            {tags &&
              tags.map((tag, index) => <button key={index}>{tag}</button>)}
          </div>
        </div>
        <div className="column">
          <div className="rowstar">
            <h4>{hostname}</h4>
            <img className="badge" src={hostpicture} alt="badge" />
          </div>
          <RatingStars ratingStars={ratingStars} />
        </div>
      </div>

      <div className="rowcollapse">
        <CollapseLogement
          title="Description"
          description={<span className="">{`${description}`}</span>}
        />
        <CollapseLogement2
          title="Équipements"
          description={
            <ul className="">
              {equipments.map((equipment) => {
                return <li key={`${equipment}`}>{equipment}</li>
              })}
            </ul>
          }
        />
      </div>
    </>
  )
}

export default Sectionlogement
