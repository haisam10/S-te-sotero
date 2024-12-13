import React from 'react'
import '../PopularItem/PopularItem.css'
import Pic1 from '../../Image/pic-1.jpeg'
import Pic2 from '../../Image/pic-2.jpeg'
import Pic3 from '../../Image/pic-3.jpeg'
function PopularItem() {
  return (
    <>
    <h2 className='popular-head-text'>Popular Item</h2>
    <div className='PopularItem'>
      <div>
        <img src={Pic1} alt="" srcset="" />
        <p>name jani nah</p>
        <span>Price: 10 ৳</span>
      </div>
      <div>
        <img src={Pic2} alt="" srcset="" />
        <p>name jani nah</p>
        <span>Price: 10 ৳</span>
      </div>
      <div>
        <img src={Pic3} alt="" srcset="" />
        <p>name jani nah</p>
        <span>Price: 10 ৳</span>
      </div>
    </div>
    </>
  )
}

export default PopularItem