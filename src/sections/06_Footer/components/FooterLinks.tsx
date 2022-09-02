import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UploadIcon from '@mui/icons-material/Upload';
const FooterLinks = () => {
  const buttonMotion = {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 360, 360],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
  };
  const bouncingArrow = {
    bounce: {
      y: [5,-2],
      transition: { y:{yoyo:Infinity,
      duration:0.5,
    ease:'easeOut'}}
    }
  }
 
  return (

  <Stack spacing={2} sx={{mt:21}}><motion.div className='wrap-icon' animate='bounce' variants={bouncingArrow}>
    <Button >
             
    <UploadIcon sx={{color:'white', height:'50px', width:'50px'}}/></Button></motion.div>
    <Box>
   

          <motion.div className='wrap-icon git' whileHover={buttonMotion} style={{marginInline:2}}>
            <Button href="https://github.com/Jbridges1119" target="_blank">
              <img
                src={github}
                alt={""}
                loading="lazy"
                style={{ height: "60px" }}
              />
            </Button>
          </motion.div>
          <motion.div className='wrap-icon' whileHover={buttonMotion}>
            <Button
              href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
              target="_blank"
            >
              <img color={"white"} src={linkedin} alt={""} loading="lazy" />
            </Button>
          </motion.div>
          <motion.div className='wrap-icon' whileHover={buttonMotion}>
            <Button href="mailto:Jbridges1119@gmail.com" target="_blank">
              <MailOutlineIcon
                sx={{ height: "50px", width: "50px", color: "white" }}
              />
            </Button>
          </motion.div> </Box>
         
          <Divider/><Button sx={{all: 'unset', cursor:'pointer'}} href="https://github.com/Jbridges1119/portfolio"
              target="_blank">
      <Typography variant="body2"color={'white'}>Designed and Built By Jeff Bridges</Typography></Button>
      </Stack>
     
  );
};

export default FooterLinks;
