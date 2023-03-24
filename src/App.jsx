import React from "react"
import Accueil from "./pages/accueil"
import About from "./pages/about"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ErrorPage from "./pages/404Page"
import Logement from "./pages/FicheLogement"
import { Route, Routes } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
