import React from "react";
//styles
import "../../styles/06_FooterStyle/Footer.css";
//Components
import WavesBottom from "./components/WavesBottom";
import FooterLinks from "./components/FooterLinks";

const Connect: React.FC = () => {
  return (
    <div className="hero-bottom" id="tsparticles1">
      <WavesBottom />
      <FooterLinks />
    </div>
  );
};

export default Connect;
