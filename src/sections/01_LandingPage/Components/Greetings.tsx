import React from "react";
//MUI
import { Box, Stack, Typography } from "@mui/material";
//Style
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  speed: number;
};

const Greetings: React.FC<Props> = ({ speed }) => {
  const timer = () => Math.floor(Math.random() * 10);
  const scrollAmount = 450;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ["blur(0px)", "blur(5px)"]
  );
  //Framer motion variant
  const bottomText = {
    offScreen: { filter: "blur(10px)", opacity: 0 },
    onScreen: {
      opacity: 1,
      filter: "blur(00px)",
      transition: { delay: 1.25, type: "spring", bounce: 0.4, duration: 3 },
    },
  };

  return (
    <motion.div
      className="fill"
      style={{ opacity, position: "fixed", y: "-10%", filter }}
    >
      <Stack spacing={1.5}>
        <Box sx={{ textAlign: { lg: "left", xs: "center" },   mt: {lg:0, sm:-8, xs:-4},}}>
          <Typography
            variant="h2"
            sx={{
              zIndex: 1,
              color: "white",
              display: "inline-block",
            }}
          >
            {`Hello, I'm`.split("").map((letter, i) => {
              return (
                //Cannot make a variant due to variants being one instance set - need repeated instances
                <motion.span
                  initial={{ opacity: 0.0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ type: "spring", bounce: 0.4, duration: 4 }}
                  key={i}
                >
                  <motion.span
                    initial={{ filter: `blur(${timer()}px)` }}
                    animate={{
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.4,
                      duration: 3,
                    }}
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              );
            })}
            &nbsp;
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              display: { xl: "inline-block", lg: "block", xs: "inline-block" },
              zIndex: 1,
              color: "white",
            }}
          >
            {"Jeff Bridges".split("").map((letter, i) => {
              return (
                //Cannot make a variant due to variants being one instance set - need repeated instances
                <motion.span
                  initial={{ opacity: 0.0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ type: "spring", bounce: 0.4, duration: 4 }}
                  key={i}
                >
                  <motion.span
                    initial={{ filter: `blur(${timer() * 2}px)` }}
                    animate={{
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.4,
                      duration: 3,
                    }}
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              );
            })}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            zIndex: 1,
            color: "white",
            textAlign: { lg: "left", xs: "center" },
            fontFamily: "DM Sans",
          }}
        >
          <motion.div
            initial={"offScreen"}
            animate={"onScreen"}
            variants={bottomText}
          >
            {" "}
            Full-Stack Web Developer
          </motion.div>
        </Typography>
      </Stack>
    </motion.div>
  );
};

export default Greetings;
