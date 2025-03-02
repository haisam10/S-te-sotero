import React from "react";
import "../HeroArea/HeroArea.css";
import TokenImage from "../../Image/Token.png";
import Video from '../../Image/bgVideo.mp4'
function HeroArea() {
  return (
    <>
      {/* Heroarea */}
      <div className="Heroarea">
        <video src={Video} autoPlay loop muted></video>
        <p>
          WELCOME TO OUR <br />
          RESTURant WEBPAge
        </p>
        {/* <img src={TokenImage} alt="Error: 0x80004005" /> */}
      </div>
    </>
  );
}

export default HeroArea;
