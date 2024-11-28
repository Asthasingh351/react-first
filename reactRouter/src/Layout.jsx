import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function layout() {
  return (
    <>
     <Header/>
     <Outlet/>
      
     <Footer/>
    </>
  )
}

export default layout