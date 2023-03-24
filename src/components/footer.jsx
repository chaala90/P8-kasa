import React from "react"
import "./footer.css"
import logoFooter from "../assets/images/Logo_footer.png"
function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo_footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
export default Footer
