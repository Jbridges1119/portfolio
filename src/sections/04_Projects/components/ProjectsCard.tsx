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
import { motion } from "framer-motion";
//Helper
import { projectsInfo } from "../../../helpers/ProjectsHelper";

const ProjectsCard = () => {
  const projectCard = projectsInfo.map((project) => {
    type buttonType = {
      name: string;
      link: string;
    };

    const buttonLinks = project.buttons.map((button: buttonType) => {
      return (
        <Button key={button.name}
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
      <Paper key={project.name}
        elevation={24}
        sx={{
          width: "100%",
          background: `#E3EAFD`,
          borderRadius: 5,
        }}
      >
        <motion.div
          initial={{ x: -100, scale: 0.85, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: [0, 10, 0],
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          }}
        >
          <Paper elevation={24} sx={{ borderRadius: 5 }}>
            <CardMedia
              component="img"
              image={project.gif}
              alt=""
              sx={{
                borderRadius: 5,
              }}
            />
          </Paper>
        </motion.div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Stack spacing={2}>
              <Typography variant="h4" mt={2} color={"#4345E8"}>
                {project.name}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                sx={{ pb: 4 }}
              >
                {buttonLinks}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    );
  });

  return <>{projectCard}</>;
};

export default ProjectsCard;
