import React, { useState, useEffect } from "react"
import "../pages/ficheLogement.css"

function Caroussel(props) {
  const [logements, setLogements] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const pictures = props.pictures

  useEffect(() => {
    fetch("logement.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch(console.error)
  }, [])

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? logements.length - 1 : currentSlide - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === logements.length - 1 ? 0 : currentSlide + 1
    )
  }

  return (
    <div className="caroussel">
      <img className="slide" src="banner_logement.png" alt="logement" />
      <img
        className="arrow_left"
        onClick={previousSlide}
        src="arrow_left.png"
        alt="Previous slide"
      />
      <img
        className="arrow_right"
        onClick={nextSlide}
        src="arrow_right.png"
        alt="Next slide"
      />
      <div className="count">
        <span className="number">
          {currentSlide + 1}/{logements.length}
        </span>
      </div>
    </div>
  )
}

export default Caroussel
