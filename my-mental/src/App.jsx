import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Resources from './Resources'
import Support from './Support'
import MyStory from './MyStory'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (  
    <Router>
      <nav className="bg-gray-100 p-4 flex gap-6 shadow-md">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-green-600 hover:underline">About</Link>
        <Link to="/resources" className="text-purple-600 hover:underline">Resources</Link>
        <Link to="/support" className="text-orange-600 hover:underline"> Support</Link>
        <Link to="/mystory" className="text-teal-600 hover:underline"> My Story</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/mystory" element={<MyStory />} />
      </Routes>
      </Router>
  );
}

export default App;


