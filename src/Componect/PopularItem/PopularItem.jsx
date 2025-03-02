import React from 'react'
import '../PopularItem/PopularItem.css'
import Pic1 from '../../Image/pic-1.jpeg'
import Pic2 from '../../Image/pic-2.jpeg'
import Pic3 from '../../Image/pic-3.jpeg'
function PopularItem() {
  return (
    <>
    <div className='pop-bg-color'>
       <h2 className='popular-head-text'>Popular Item <i class="fa-solid fa-fire"></i></h2>
    <div className='PopularItem'>
      <div>
        <img src={Pic1} alt="" srcset="" />
        <p>S.S Special Chowmein</p>
        <span>Price: 300 ৳ | 1:2 </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span>Price: 550 ৳ | 1:4 </span><br /><br />
        <i class="fa-solid fa-fire"> hot sale </i>
      </div>
      <div>
        <img src={Pic2} alt="" srcset="" />
        <p>Express Platter</p>
        <span>Price: 320 ৳</span><br /><br />
        <i class="fa-solid fa-fire"> hot sale </i>
      </div>
      <div>
        <img src={Pic3} alt="" srcset="" />
        <p>Mexican hot pizza 12"</p>
        <span>Price: 800 ৳</span><br /><br />
        <i class="fa-solid fa-fire"> hot sale </i>
      </div>
    </div> 
    </div>
  
    </>
  )
}

export default PopularItem