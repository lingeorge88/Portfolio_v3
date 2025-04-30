import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

function App() {
  // You might add state here later if needed

  return (
    <>
      <Navbar />
      <Hero />
      <div id="app-content" className="app-content-container">
        <About />
        {/* Projects, Skills, Contact sections will go here later */}
      </div>
    </>
  )
}

export default App
