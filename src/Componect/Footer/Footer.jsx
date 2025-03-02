import React from "react";
import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer">
        <p className="Footer-top-text">Spread happiness today</p>
        <div className="Footer-contuct">
          <div>
            <p>store location</p>
            <p>
              Uttara Sector 17, Block I, <br /> Road 10, Plot 26, Dhaka
            </p>
          </div>
          <div>
            <p>e-mail address</p>
            <p className="gamil">stesotero53@gmail.com</p>
          </div>
          <div>
            <p>phone number</p>
            <p>+880 1780-126370</p>
          </div>
        </div>
        <div className="Footer-midea">
          <p className="Footer-midea-head-Text">social media</p>
          <div>
            <a
              href="https://www.facebook.com/S.te.Sotero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/stesotero0/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@stesotero0" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-tiktok"></i>
            </a>
            <a
              href="https://maps.app.goo.gl/m88TEQc2gareJXHy8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="Mini-Footer">
          <a href="https://haisam10.github.io/haisam_/" target="_blank" rel="noopener noreferrer"><p>Developer Team</p></a>
          <p>Copyright © 2024  " স তে সতেরো " | All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
