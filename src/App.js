import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleAnime from './pages/SingleAnime'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/anime/:id' element={<SingleAnime />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </Router>
  )
}

export default App
