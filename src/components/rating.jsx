import "../pages/ficheLogement.css"
import imgColored from "../assets/images/star_rate-colored.png"
import imgGrey from "../assets/images/star_rate-grey.png"
function RatingStars({ ratingStars }) {
  const colors = ["#F44336", "#FFC107", "#FFEB3B", "#4CAF50", "#2196F3"]
  const ratings = Array.from({ length: 5 }).map((rating, index) => {
    const numberOfStars = index + 1

    return (
      <span key={index}>
        {ratingStars >= numberOfStars ? (
          <img
            className="imgColored"
            src={imgColored}
            alt="star colored"
            rating={rating}
            style={{ filter: `drop-shadow(0 0 2px ${colors[index]})` }}
          />
        ) : (
          <img
            className="imgGrey"
            src={imgGrey}
            alt="grey star"
            rating={rating}
          />
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
