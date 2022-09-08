//MUI
import { Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
//Components
import RestOfSkills from "./components/02_RestOfSkills";
import Frontend from "./components/01_Frontend";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

import { motion, useScroll, useTransform} from 'framer-motion'

const Skills = () => {
  const { currentPercent, skillSect } = usePageLocation();
  const {scrollYProgress, scrollY} = useScroll()
  const yValue = useTransform(scrollYProgress, [0,1], [50,100])
  const opacity = useTransform(scrollYProgress, [0.26,0.35], [0,1])
  return (
    
      
     
      <Box ref={skillSect}
        
        sx={{
          background: `white`,
          position: "relative",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Box height={"11vh"}/>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={6} md={7} xs={10}>
            <motion.div style={{ opacity}}> 
            <Paper
              elevation={24}
              sx={{
                width: "100%",
                background: `#E3EAFD`,
                my: 3,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item xs={10}>
                <Stack spacing={1} my={3}>
                  <Frontend />
                  <RestOfSkills />
                </Stack>
              </Grid>
            </Paper></motion.div>
          </Grid>
        </Grid>
        <Box height={"22vh"}/>
      </Box>
   
  );
};

export default Skills;
