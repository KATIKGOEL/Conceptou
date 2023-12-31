import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
