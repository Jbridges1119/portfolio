import React, { useEffect } from "react";

//MUI5
import { Grid } from "@mui/material";

//styles
import "../../styles/01_LandingPageStyle/LandingPage.css";
import { motion } from "framer-motion";
//Particles
import Bubbles from "./Components/Bubbles";
//Components
import Waves from "./Components/Waves";
import Greetings from "./Components/Greetings";
import MainButtons from "./Components/MainButtons";
import NavBar from "./Components/NavBar";
import ScrollDown from './Components/ScrollDown'
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

const LandingPage: React.FC = () => {
  const { currentPercent, topSect } = usePageLocation();
  useEffect(() => {


  })
  return (
    <>
    <div className="hero" id="tsparticles1" ref={topSect}>
      <NavBar />
     
        <Grid
          height={"75%"}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} lg={2.5}></Grid>
          <Grid item xs={12} lg={4.25}>
            <Greetings speed={2}/>
          </Grid>
          <Grid item xs={0} lg={1}></Grid>
          <Grid item xs={12} lg={2.5}>
            <MainButtons speed={2}/>
          </Grid>
          <Grid item xs={12} lg={1.5}></Grid>
        </Grid>
    
      <Waves />
      <Bubbles />
      
    </div>
    <ScrollDown/>
    </>
  );
};

export default LandingPage;
