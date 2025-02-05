import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Correct import for Footer

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* Render Footer only on the /Contact page */}
      {location.pathname === "/Contact" && <Footer />}
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
