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

//Mobile fix maybe?
// const attributes = isMobile ? {
//   drag: "x",
//   dragConstraints: { left: 0, right: 0 },
//   animate: { x: myVariable },
//   onDragEnd: myFunction
// } : { onMouseOver, onMouseLeave };
// <motion.div {...attributes}> {/* stuff */} </motion.div>

const Projects = () => {
  return (
    <Box
      sx={{
        height: "100%",
        background: `white`,
        position: "relative",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Box height={"15vh"}></Box>

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
    </Box>
  );
};

export default Projects;
