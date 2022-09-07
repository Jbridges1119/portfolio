//MUI
import {
  Button,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
//Style
import { motion, useInView } from "framer-motion";
//Helper
import { projectsInfo } from "../../../helpers/ProjectsHelper";

const ProjectsCard = () => {
 

  // const imageAnimate = {
  //   offScreen: {  scale: 0.85, opacity: 1 },
  //   onScreen: {

  //     scale: 0.85,
  //     opacity: 1,
      
  //     transition: { type: "tween", bounce: 0.4, duration: 1 },
  //   },
  // };
  // const textAnimate = {
  //   offScreen: { y: 100,  opacity: 0 },
  //   onScreen: {
  //     y: 0,
  //     opacity: 1,
  //     // scale: [0.85, 1.1, 1],
  //     transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  //   },
  // };
  // const buttonAnimate = {
  //   offScreen: {opacity: 0, scale: 0},
  //   onScreen: {
  //     opacity: 1,
  //     scale:  1,
  //     transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  //   },
  // }
  const cardAnimation ={
    offScreen: {y:50, opacity: 0},
    onScreen: {
      y:0,
      opacity: 1,
      transition: {type: 'tween', duration: 0.25}
    }
  }
  const projectCard = projectsInfo.map((project) => {
    type buttonType = {
      name: string;
      link: string;
    };
    
    const buttonLinks = project.buttons.map((button: buttonType) => {
      
      return (
        <Button
          key={button.link}
          href={button.link}
          target="_blank"
          sx={{
            display: "flex",
            color: "#fff",
            border: "2px solid white",
            borderRadius: 25,
            fontSize: 14,
            backgroundColor: "#a557ff",
            width: "100px",
            pt: 1.2,
            fontWeight: "bold",
          }}
        >
          {button.name}
        </Button>
      );
    });

    return (
      <motion.div className="fill" key={project.name}
   initial={'offScreen'}
   whileInView={'onScreen'}
   viewport={{once:true}}
   transition={{staggerChildren: 0.5}}>
    <motion.div className="fill" variants={cardAnimation}>
      <Paper
        
        elevation={24}
        sx={{
          width: "100%",
          background: `#E3EAFD`,
          borderRadius: 5,
          display: 'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
      
          <Paper  sx={{ borderRadius: 5,m:2, width:'90%' }}>
            <CardMedia
              component="img"
              image={project.gif}
              alt=""
              sx={{
                objectFit:'contain',
                
                borderRadius: 5,position: 'relative'
              }}
            />
          </Paper>
     
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Stack spacing={0}>
              <motion.div
                className="fill"
              
                // variants={textAnimate}
              >
                <Typography variant="h4"  color={"#4345E8"}>
                  {project.name}
                </Typography>
              </motion.div>
              <motion.div
                className="fill"
               
                // variants={textAnimate}
              >
              <Typography variant="body1" >{project.description}</Typography></motion.div>
              <motion.div
                className="fill"
               
                // variants={buttonAnimate}
              >
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                sx={{ py: 1.5 }}
              >
                {buttonLinks}
              </Box></motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Paper></motion.div></motion.div>
    );
  });

  return <>{projectCard}</>;
};

export default ProjectsCard;
