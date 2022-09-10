//MUI
import { Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
//Components
import RestOfSkills from "./components/02_RestOfSkills";
import Frontend from "./components/01_Frontend";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";
//Style
import { motion, useScroll, useTransform } from "framer-motion";

const Skills: React.FC = () => {
  const { skillSect } = usePageLocation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.26, 0.3], [0, 1]);
  const backgroundCardSX = {
    width: "100%",
    background: `#E3EAFD`,
    my: 3,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Box
      ref={skillSect}
      sx={{
        background: `white`,
        position: "relative",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Box sx={{height: {lg:'11vh', xs:'3vh'}}} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6} md={7} xs={10}>
          <motion.div style={{ opacity }}>
            <Paper elevation={24} sx={backgroundCardSX}>
              <Grid item xs={10}>
                <Stack spacing={1} my={3}>
                  <Frontend />
                  <RestOfSkills />
                </Stack>
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
      <Box height={"22vh"} />
    </Box>
  );
};

export default Skills;
