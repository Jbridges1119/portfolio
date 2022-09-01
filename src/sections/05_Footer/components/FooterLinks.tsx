import { Button,Grid } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
const FooterLinks = () => {
  return (
    <Grid
    height={"75%"}
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
   
  >
    <Grid item xs={12} > 
    <motion.div style={{zIndex: 100}}
    whileHover={{
      scale: [1, 1.5,1.5, 1, 1],
      rotate: [0,  360, 360],

    }}
    >
    <Button 
      href="https://github.com/Jbridges1119"
      target="_blank"
      sx={{ display: { xs: "none", md: "block" }, zIndex: 10 }}
    >
      <img src={github} alt={""} loading="lazy" style={{height:'60px'}} />
    </Button></motion.div>
    <motion.div
        whileHover={{
          scale: [1, 1.5,1.5, 1, 1],
          rotate: [0,  360, 360],

        }}
        
    >
    <Button
      href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
      target="_blank"
      sx={{ display: { xs: "none", md: "block" },  }}
    >
      <img color={"white"} src={linkedin} alt={""} loading="lazy" />
    </Button></motion.div></Grid></Grid>
  )
}

export default FooterLinks