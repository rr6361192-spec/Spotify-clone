import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Dispalya from './Dispalya'
function Display() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Dispalya />} /></Routes>
    </div>
  )
}

export default Display
