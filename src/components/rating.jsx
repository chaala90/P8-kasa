import React from "react"
import "../pages/ficheLogement.css"
/*import imgColored from "../../public/star_rate-colored.png"
import imgGrey from "../../public/star_rate-grey.png"*/
/*import "./RatingStars.css";*/

const RatingStars = ({ ratingStars }) => {
  const ratings = Array.from({ length: 5 }).map((rating, index) => {
    const numberOfStars = index + 1

    return (
      <span key={index}>
        {ratingStars >= numberOfStars ? (
          <img src="star_rate-colored.png" alt="star colored" rating={rating} />
        ) : (
          <img src="star_rate-grey.png" alt="grey star" rating={rating} />
        )}
      </span>
    )
  })
  return (
    <>
      <div className="rating">{ratings}</div>
    </>
  )
}

export default RatingStars
