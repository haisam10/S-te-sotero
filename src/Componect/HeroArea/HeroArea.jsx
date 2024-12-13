import React from "react";
import "../HeroArea/HeroArea.css";
import TokenImage from "../../Image/Token.png";
function HeroArea() {
  return (
    <>
      {/* Heroarea */}
      <div className="Heroarea">
        <p>
          WELCOME TO OUR <br />
          RESTURant WEBPAge
        </p>
        <img src={TokenImage} alt="Error: 0x80004005" />
      </div>
    </>
  );
}

export default HeroArea;
