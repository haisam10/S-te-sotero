import React from 'react'
import Navbar from '../../Componect/Navbar/Navbar'
import HeroArea from '../../Componect/HeroArea/HeroArea'
import PopularItem from '../../Componect/PopularItem/PopularItem'
import Menu from '../../Componect/Menu/Menu'
import Footer from '../../Componect/Footer/Footer'
import BatchFooter from '../../Componect/BatchFooter/BatchFooter'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HeroArea></HeroArea>
    <PopularItem></PopularItem>
    <Menu></Menu>
    <BatchFooter></BatchFooter>
    <Footer></Footer>
    </>
  )
}

export default Home