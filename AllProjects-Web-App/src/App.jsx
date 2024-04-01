import React from 'react'
import Button from "@mui/material/button"
import {Outlet} from "react-router-dom"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import "./index.css"
function App() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  )
}

export default App