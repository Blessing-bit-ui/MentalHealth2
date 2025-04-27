import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Resources from './Resources'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4 flex gap-6 shadow-md">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-green-600 hover:underline">About</Link>
        <Link to="/resources" className="text-purple-600 hover:underline">Resources</Link>
        <Link to="/support" classN
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      </Router>
  );
}

export default App;


