import React from "react"
import Caroussel from "../components/caroussel"
import Sectionlogement from "../components/section_logement"

import logements from "../pages/Logement.json"
import "../pages/ficheLogement.css"
import { Link, useParams } from "react-router-dom"

function FicheLogement() {
  const { paramId } = useParams()
  let logement = logements.find((logement) => logement.id === paramId)
  /*appart || {}*/
  if (!logement) {
    return <Link to="*" />
  }
  const { title, description, host, rating, location, equipments, tags } =
    logement

  return (
    <>
      <Caroussel />
      <Sectionlogement
        title={title}
        description={description}
        hostname={host && host.name}
        hostpicture={host && host.picture}
        ratingStars={rating}
        location={location}
        equipments={equipments}
        tags={tags}
      />
    </>
  )
}
export default FicheLogement
