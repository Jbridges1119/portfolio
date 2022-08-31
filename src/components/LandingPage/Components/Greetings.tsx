import React from "react";
//MUI5
import { Stack, Typography } from "@mui/material";
//Style
import { motion } from "framer-motion";
// import "../../../styles/LandingPage/LandingPage.css";


const Greetings = () => {
  return (
    <>
      <Stack spacing={4}>
        <motion.div>
          <Typography
            variant="h2"
            sx={{
              zIndex: 1,
              color: "white",
            }}
          >
            {/* <span className="bounce">H</span>
         <span className="bounce">e</span>
         <span className="bounce">l</span>
         <span className="bounce">l</span>
         <span className="bounce">o</span>
         <span className="bounce">,&nbsp;</span>
         <span className="bounce">I</span>
         <span className="bounce">'</span>
         <span className="bounce">m&nbsp;</span>
         <span className="bounce">J</span>
         <span className="bounce">e</span>
         <span className="bounce">f</span>
         <span className="bounce">f&nbsp;</span>
         <span className="bounce">B</span>
         <span className="bounce">r</span>
         <span className="bounce">i</span>
         <span className="bounce">d</span>
         <span className="bounce">g</span>
         <span className="bounce">e</span>
         <span className="bounce">s</span> */}
            Hello, I'm&nbsp;
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
          </Typography>
        </motion.div>
        <Typography
          variant="h3"
          sx={{
            zIndex: 1,
            color: "white",
          }}
        >
          {/* <span className="bounce">F</span>
          <span className="bounce">u</span>
          <span className="bounce">l</span>
          <span className="bounce">l</span>
          <span className="bounce">-</span>
          <span className="bounce">S</span>
          <span className="bounce">t</span>
          <span className="bounce">a</span>
          <span className="bounce">c</span>
          <span className="bounce">k&nbsp;</span>
          <span className="bounce">W</span>
          <span className="bounce">e</span>
          <span className="bounce">b&nbsp;</span>
          <span className="bounce">D</span>
          <span className="bounce">e</span>
          <span className="bounce">v</span>
          <span className="bounce">e</span>
          <span className="bounce">l</span>
          <span className="bounce">o</span>
          <span className="bounce">p</span>
          <span className="bounce">e</span>
          <span className="bounce">r</span> */}
          Full-Stack Web Developer
        </Typography>
      </Stack>
    </>
  );
};

export default Greetings;
