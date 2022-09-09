//MUI
import { Grid, Box } from "@mui/material";
//Style
import { useScroll } from "framer-motion";
import "../../styles/04_ProjectsStyle/Projects.css";
//Components
import ProjectsCard from "./components/ProjectsCard";
//Context hook
import { usePageLocation } from "../../hooks/pageContext";

const Projects: React.FC = () => {
  const { projectSect } = usePageLocation();
  // const { scrollYProgress } = useScroll();
  // const yValue = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   [50, 70, 100 * -0.35]
  // );
  // const opacity = useTransform(scrollYProgress, [0.48, 0.54], [0, 1]);
  return (
    <>
      <Box
        ref={projectSect}
        sx={{
          height: "100%",
          background: `white`,
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Box height={"4vh"} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            lg={8}
            md={8}
            sm={10}
            xs={10}
            display={"grid"}
            //If I make another project add tinyapp and set this to xl:'repeat(3, 1fr)'
            gridTemplateColumns={{xl:'repeat(2, 1fr)', md: "repeat(2, 1fr)", xs: "1fr" }}
            // gridTemplateRows={{xl:'repeat(3, 1fr)', md: "repeat(2, 1fr)", xs: "1fr" }}
            gap={6}
          >
            <ProjectsCard />
          </Grid>
        </Grid>
        <Box height={"15vh"} />
      </Box>
    </>
  );
};

export default Projects;
