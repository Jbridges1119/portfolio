//MUI
import { Grid, Box } from "@mui/material";
//Components
import Story from "./components/Story";
import Picture from "./components/Picture";
//Style
import { motion, useScroll, useTransform } from "framer-motion";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

const AboutMe: React.FC = () => {
  const { aboutSect } = usePageLocation();
  return (
    <Box
      ref={aboutSect}
      sx={{
        background: `white`,
        position: "relative",
        width: "100%",
        zIndex: 3,
      }}
    >
      <Box height={"15vh"}></Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={5.75} order={{ xs: 3, md: 1 }}>
              <Story speed={-2} />
            </Grid>
            <Grid item xs={0.25} lg={0.5}></Grid>
            <Grid item xs={12} md={4} order={{ xs: 1, md: 3 }}>
              <Picture speed={-3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box height={"12vh"}></Box>
    </Box>
  );
};

export default AboutMe;
