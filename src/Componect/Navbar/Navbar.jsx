import React from 'react'
import '../Navbar/Navbar.css'
import Navlogo from '../../Image/nav-logo.png'
function Navbar() {
  return (
    <>
    <nav className='Navbar'>
        {/* Navbar text */}
        <div className='nav-text'>
            <p>Thai & Chinese <br/> Restaurant</p>
        </div>
        {/* Navbar logo */}
        <div>
            <img src={Navlogo} alt="Error: 0x80004005"/>
        </div>
        {/* Navbar icon */}
        <div className='nav-logo'>
          <div>
            <a href="https://www.facebook.com/S.te.Sotero" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/stesotero0/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
          </div>
            <div>
              <a href="https://www.tiktok.com/@stesotero0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://maps.app.goo.gl/m88TEQc2gareJXHy8" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i></a>
            </div>
            
        </div>

    </nav>
    </>
  )
}

export default Navbar