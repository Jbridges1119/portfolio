import React from "react";

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
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

const LandingPage: React.FC = () => {
  const { currentPercent, topSect } = usePageLocation();
  return (
    <div className="hero" id="tsparticles1" ref={topSect}>
      <NavBar />
      <motion.div className="fill">
        <Grid
          height={"75%"}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} lg={3}></Grid>
          <Grid item xs={12} lg={4.25}>
            <Greetings />
          </Grid>
          <Grid item xs={0} lg={0.25}></Grid>
          <Grid item xs={12} lg={2}>
            <MainButtons />
          </Grid>
          <Grid item xs={12} lg={2}></Grid>
        </Grid>
      </motion.div>
      <Waves />
      <Bubbles />
    </div>
  );
};

export default LandingPage;
