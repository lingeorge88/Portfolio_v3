import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'

function App() {
  // You might add state here later if needed

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Route */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <div id="app-content" className="app-content-container">
              <About />
            </div>
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Blog Route */}
        <Route path="/blog" element={
          <>
            <Navbar />
            <Blog />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
