import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar" // Import the Navbar component
// import Hero from "./pages/Hero"

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
