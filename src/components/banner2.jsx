import React from "react"
import "./banner.css"
import about from "../assets/images/about.png"

function BannerAbout() {
  return (
    <div className="bannerAbout">
      <img src={about} alt="bannerabout" />
    </div>
  )
}
export default BannerAbout
