import React from "react";
import Logo from "../../Image/nav-logo.png";
import "../BatchFooter/BatchFooter.css";
function BatchFooter() {
  return (
    <>
      <div className="Featured">
        <p className="Featured-head-text">featured press</p>
        <div className="Featured-Batch">
          <div className="item-1">
            <h3>GOOD FOOD</h3>
            <p>MANAGEMENT</p>
          </div>
          <img src={Logo} alt="" srcset="" />
          <div className="item-2">
            <h3>7</h3>
            <p>
              OPEN <br /> DAYS A WEEK
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BatchFooter;
