import React from "react";
import BannerAbout from "../components/banner2"
import Fiabilité from "../components/fiabilité"
import Respect from "../components/respect"
import Service from "../components/service"
import Sécurité from "../components/sécurité"


function About(){
    return (
        <>
        <BannerAbout />
        <div className="DescriptionAbout">
        <Fiabilité />
        <Respect />
        <Service />
        <Sécurité /> 
        </div>
        </>
)
}
export default About;