//MUI
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
//Components
import ConnectForm from "./components/ConnectForm";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform} from 'framer-motion'

type Props = { 
  speed: number;
}

const Connect: React.FC<Props> = ({speed})=> {
  const { currentPercent, connectSect } = usePageLocation();
  const {scrollYProgress, scrollY} = useScroll()
  const yValue = useTransform(scrollYProgress, [0,1], [50,100])
  const opacity = useTransform(scrollYProgress, [0.82,0.88], [0,1])


  return (
   
  
      
      <Box ref={connectSect}
        
        sx={{
          background: `white`,
          position: "relative",
          width: "100%",
        }}
      ><Box height={"5vh"} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xl={7} lg={8} md={8} xs={10}>
          <motion.div className="fill" 
    style={{ opacity}}
    >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item xs={11} lg={3}>
                  <Stack spacing={2}>
                    <Typography mt={4} color={"#4345E8"} variant="h3">
                      Let's Connect!
                    </Typography>
                    <Divider />
                    <Typography variant="h6">
                      I'd love to here from you! <br />
                      If you want to grab a "remote" coffee and chat, please
                      feel free to leave me a message and say hello.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={0.5}></Grid>
                <Grid item xs={11} lg={7.5}>
                  <ConnectForm />
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
        <Box height={"10vh"}/>
      </Box>
    
   
  );
};

export default Connect;
