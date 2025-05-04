import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

function App() {
  // You might add state here later if needed

  return (
    <>
      <Navbar />
      <Hero />
      <div id="app-content" className="app-content-container">
        <About />
      </div>
        <Skills />
        <Projects />
      <Footer />
    </>
  )
}

export default App
