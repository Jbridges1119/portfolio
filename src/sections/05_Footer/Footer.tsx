import React from "react";

//MUI5
import { Grid } from "@mui/material";

//styles
import '../../styles/06_FooterStyle/Footer.css'
//Particles
import BubblesBottom from "./components/BubblesBottom"
//Components
import WavesBottom from "./components/WavesBottom";
import FooterLinks from './components/FooterLinks'

const Connect: React.FC = () => {
  return (
    <div className="hero-bottom" id="tsparticles1">
      
      <Grid
        height={"75%"}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={1}>
    <FooterLinks/>
          
        </Grid>
        
      </Grid>
      <WavesBottom />
     <BubblesBottom/>

      
    </div>
  );
};

export default Connect;
