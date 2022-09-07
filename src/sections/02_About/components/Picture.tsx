import React from "react";

//Style
import { motion, useScroll, useTransform} from 'framer-motion'
import Thinking from "../../../assets/thinking.png";
//MUI5
import { CardMedia, Box } from "@mui/material";


type Props = { 
  speed: number;
}
const Picture: React.FC<Props> = ({speed}) => {


  return (
    <Box
      sx={{
        
        borderRadius: "20px",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        zIndex:10
      }}
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
     
    </Box>
  );
};

export default Picture;
