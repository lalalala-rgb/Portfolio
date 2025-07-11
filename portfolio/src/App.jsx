import { useState } from 'react'
import Home from "./pages/home"
import Header from "./component/Header"
import {Routes, Route} from "react-router-dom"
import "./styles/index.css"


function App() {
  return (
    <>
    <Header />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  )
}

export default App
