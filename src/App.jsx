import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import OportunityDescription from './components/core/OportunityDescription'
import './App.css'
import Career from './components/core/Career'

function App() {

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Career/>} />
          <Route path="/oportunity" exact element={<OportunityDescription/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
