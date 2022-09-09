import React from "react";
//Style
import { motion, useScroll, useTransform } from "framer-motion";
import Thinking from "../../../assets/thinking1.png";
//MUI5
import { CardMedia, Box } from "@mui/material";

type Props = {
  speed: number;
};
const Picture: React.FC<Props> = ({ speed }) => {
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [50, 100 / speed]);
  // const opacity = useTransform(scrollYProgress, [0.26,0.32], [0,1])
  const pictureBoxSX = {
    borderRadius: "20px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    zIndex: 10,
  };
  const aboutPictureSX = {
    objectFit: "contain",
    maxWidth: "700px",
    maxHeight: "700px",
  };
  return (
    <motion.div style={{ y: yValue }}>
      <Box sx={pictureBoxSX}>
        <CardMedia
          component="img"
          image={Thinking}
          alt=""
          sx={aboutPictureSX}
        />
      </Box>
    </motion.div>
  );
};

export default Picture;
