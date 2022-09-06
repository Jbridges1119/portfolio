import React from "react";
//MUI5
import { Box,Stack, Typography } from "@mui/material";
//Style
import {   motion } from "framer-motion";
// import "../../../styles/LandingPage/LandingPage.css";

const Greetings = () => {
  return (
    <>
      <Stack spacing={1.5}>
        <Box sx={{textAlign: {lg:'left', xs: 'center'}}}>
         
          <Typography
            variant="h2"
            sx={{
              zIndex: 1,
              color: "white",
              display: "inline-block",
         
            }}
          >
            Hello, I'm&nbsp;
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              display: "inline-block",
              zIndex: 1,
              color: "white",
             
            }}
          >
            Jeff Bridges
          </Typography>
         
        </Box>
        <Typography
          variant="h4"
          sx={{
            zIndex: 1,
            color: "white",
            textAlign:{lg:'left', xs: 'center'}
          }}
        >
          Full-Stack Web Developer
        </Typography>
      </Stack>
    </>
  );
};

export default Greetings;
