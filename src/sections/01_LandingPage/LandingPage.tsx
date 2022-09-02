import React from "react";

//MUI5
import { Grid } from "@mui/material";

//styles
import "../../styles/01_LandingPageStyle/LandingPage.css";
//Particles
import Bubbles from "./Components/Bubbles";
//Components
import Waves from "./Components/Waves";
import Greetings from "./Components/Greetings";
import MainButtons from "./Components/MainButtons";
import NavBar from "./Components/NavBar";

const LandingPage: React.FC = () => {
  return (
    <div className="hero" id="tsparticles1">
      <NavBar />
      <Grid
        height={"75%"}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={1}></Grid>
        <Grid item xs={12} lg={6}>
          <Greetings />
        </Grid>

        <Grid item xs={12} lg={2}>
          <MainButtons />
        </Grid>
        <Grid item xs={12} lg={2}></Grid>
      </Grid>
      <Waves />
      <Bubbles />

      
    </div>
  );
};

export default LandingPage;