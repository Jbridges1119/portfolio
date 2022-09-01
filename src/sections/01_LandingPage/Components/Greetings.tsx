import React from "react";
//MUI5
import { Stack, Typography } from "@mui/material";
//Style
import { motion } from "framer-motion";
// import "../../../styles/LandingPage/LandingPage.css";

const Greetings = () => {
  return (
    <>
      <Stack spacing={3}>
        <motion.div>
          <Typography
            variant="h2"
            sx={{
              zIndex: 1,
              color: "white",
              display: "inline",
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
        </motion.div>
        <Typography
          variant="h3"
          sx={{
            zIndex: 1,
            color: "white",
          }}
        >
          Full-Stack Web Developer
        </Typography>
      </Stack>
    </>
  );
};

export default Greetings;
