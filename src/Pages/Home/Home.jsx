import React from 'react'
import Navbar from '../../Componect/Navbar/Navbar'
import HeroArea from '../../Componect/HeroArea/HeroArea'
import PopularItem from '../../Componect/PopularItem/PopularItem'
import Menu from '../../Componect/Menu/Menu'
import Footer from '../../Componect/Footer/Footer'
import BatchFooter from '../../Componect/BatchFooter/BatchFooter'
import Snowfall from '../../Componect/Snowfall/Snowfall'

function Home() {
  return (
    <>
    <Snowfall></Snowfall>
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