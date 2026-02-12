import { useState } from 'react'
import Navbar from './assets/Navbar.jsx'
import Hero from './assets/Hero.jsx'
import Contact from './assets/Contact.jsx'
import Projects from './assets/Projects.jsx'
import Adventures from './assets/Adventures.jsx'
import Footer from './assets/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router basename="/john-braun-dev">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
