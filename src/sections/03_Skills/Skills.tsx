//MUI
import { Grid, Paper, Stack, Typography } from "@mui/material";
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
  const yValue = useTransform(scrollYProgress, [0, 1], [100, 50 * -2]);
  const opacity = useTransform(scrollYProgress, [0.26, 0.3], [1, 1]);
 
  const backgroundCardSX = {
    width: "100%",
    background: `#E3EAFD`,
    // background: `linear-gradient(90deg, #24a4ea1F  ,#fff,#fff)`,
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
        zIndex: 3,
       flexDirection:'column',
        minHeight:{md:'100vh'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <motion.div style={{ y: yValue }}>
      <Typography
    variant="h1"
    sx={{ color: "#0F0D78", textAlign: "center", fontWeight: "bold", display: {xs:'none', md:'inline-block'} }}
  >
    Skills!
  </Typography></motion.div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      > 
        <Grid item lg={6} md={7} xs={10}>
          <motion.div style={{ opacity }}>
            <Paper elevation={16} sx={backgroundCardSX}>
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
