import React from "react";

//Style
import { motion } from "framer-motion";
import Thinking from "../../../assets/thinking.png";
//MUI5
import { CardMedia, Box } from "@mui/material";
const Picture = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "20px",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
          // animate={{
          //   scale: [1, 2, 2, 1, 1],
          //   rotate: [0, 0, 270, 270, 0],
          //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          // }}
      // animate={{ y: ["2%",'-2%'] }}
      // transition={motionTransition}
      >
        <CardMedia
          component="img"
          image={Thinking}
          alt=""
          sx={{
            objectFit: "contain",
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Picture;
