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
        <div>
            <a href="https://www.facebook.com/S.te.Sotero" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.google.com/maps/place/%22%E0%A6%B8%22+%E0%A6%A4%E0%A7%87+%22%E0%A6%B8%E0%A6%A4%E0%A7%87%E0%A6%B0%E0%A7%8B%22+%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F/@23.8566711,90.3691273,15z/data=!4m14!1m7!3m6!1s0x3755c416dd65bd2f:0x3ee4d56c0682b45f!2sShanto-Mariam+University+of+Creative+Technology!8m2!3d23.8488162!4d90.370978!16s%2Fm%2F02wyjr9!3m5!1s0x3755c10077d2e311:0x93c8095bd9574b2b!8m2!3d23.8550418!4d90.3654513!16s%2Fg%2F11y9bnsthn?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i></a>
        </div>

    </nav>
    </>
  )
}

export default Navbar