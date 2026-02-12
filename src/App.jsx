import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adventures from './assets/Adventures.jsx';
import ArticlePage from './assets/adventure_utils/ArticlePage.jsx'; // New Component
import Contact from './assets/Contact.jsx';
import Hero from './assets/Hero.jsx';
import Navbar from './assets/Navbar.jsx';
import Projects from './assets/Projects.jsx';
import Footer from './assets/Footer.jsx';


export default function App() {
  return (
    <Router basename="/john-braun-dev">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/adventures/:slug" element={<ArticlePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}