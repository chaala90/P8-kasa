import React from "react"
import Caroussel from "../components/caroussel"
import Sectionlogement from "../components/section_logement"
import logements from "./Logement.json"
import "../pages/ficheLogement.css"
import { Navigate, useParams } from "react-router-dom"

function FicheLogement() {
  const { id } = useParams()
  let logement = logements.find((logement) => logement.id === id)
  /*appart || {}*/
  if (!logement) {
    return <Navigate to="*" />
  }
  const {
    title,
    host,
    location,
    tags,
    rating,
    pictures,
    description,
    equipments,
  } = logement

  return (
    <>
      <Caroussel pictures={pictures} />
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
