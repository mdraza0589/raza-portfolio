import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Certificate from './pages/Certificate'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

