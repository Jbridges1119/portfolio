//MUI
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
//Style
import { motion } from "framer-motion";
import "../../styles/04_ProjectsStyle/Projects.css";
//Components
import ProjectsCard from "./components/ProjectsCard";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

//Mobile fix maybe?
// const attributes = isMobile ? {
//   drag: "x",
//   dragConstraints: { left: 0, right: 0 },
//   animate: { x: myVariable },
//   onDragEnd: myFunction
// } : { onMouseOver, onMouseLeave };
// <motion.div {...attributes}> {/* stuff */} </motion.div>

const Projects = () => {
  const { currentPercent, projectSect } = usePageLocation();
  return (
    <>
    <Box height={"7.5vh"} ref={projectSect}></Box>
  
    <Box 
      sx={{
        height: "100%",
        background: `white`,
        position: "relative",
        zIndex: 1,
        width: "100%",
      }}
    >
   

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          lg={9}
          md={8.5}
          sm={10}
          xs={10}
          display={"grid"}
          gridTemplateColumns={{ md: "repeat(2, 1fr)", xs: "1fr" }}
          gap={8}
        >
          <ProjectsCard />
        </Grid>
      </Grid>
    </Box></>
  );
};

export default Projects;
