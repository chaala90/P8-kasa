import React, { useState } from "react"
import "../pages/ficheLogement.css"
import arrowLeft from "../assets/images/arrow_left.png"
import arrowRight from "../assets/images/arrow_right.png"

function Caroussel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    const index = currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    const index = currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(index)
  }

  return (
    <div className="caroussel">
      <img className="slide" src={pictures[currentSlide]} alt="logement" />
      {pictures.length > 1 && (
        <>
          <img
            className="arrow_left"
            onClick={previousSlide}
            src={arrowLeft}
            alt="Previous slide"
          />
          <img
            className="arrow_right"
            onClick={nextSlide}
            src={arrowRight}
            alt="Next slide"
          />
        </>
      )}
      <div className="count">
        {pictures.length > 1 ? `${currentSlide + 1}/${pictures.length}` : ""}
      </div>
    </div>
  )
}
export default Caroussel
