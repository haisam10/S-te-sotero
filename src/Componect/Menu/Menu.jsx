import React from 'react'
import '../Menu/Menu.css'

import Menu1 from '../../Image/Menu-1.jpg'
import Menu2 from '../../Image/Menu-2.jpg'
import Menu3 from '../../Image/Menu-3.jpg'
import Menu4 from '../../Image/Menu-4.jpg'
import Menu5 from '../../Image/Menu-5.jpg'
import Menu6 from '../../Image/Menu-6.jpg'
import Menu7 from '../../Image/Menu-7.jpg'
import Menu8 from '../../Image/Menu-8.jpg'
function Menu() {
  return (
    <>
    <div className='Menu'>
      <p className='Menu-head-text'>Our Menu <i class="fa-solid fa-utensils"></i> </p>
    <div className='Menu-image'>
        <img src={Menu1} alt="Error: 0x80004005"/>
        <img src={Menu2} alt="Error: 0x80004005"/>
        <img src={Menu3} alt="Error: 0x80004005"/>
        <img src={Menu4} alt="Error: 0x80004005"/>
        <img src={Menu5} alt="Error: 0x80004005"/>
        <img src={Menu6} alt="Error: 0x80004005"/>
        <img src={Menu7} alt="Error: 0x80004005"/>
        <img src={Menu8} alt="Error: 0x80004005"/>

    </div>
    </div>
    </>
  )
}

export default Menu