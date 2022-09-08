//MUI
import {
  Button,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  Box,
} from "@mui/material";
//Helper
import { projectsInfo } from "../../../helpers/ProjectsHelper";
//Components
import ButtonMap from './ButtonMap'
import IconMap from './IconMap'

const ProjectsCard: React.FC = () => {
  return(
     <>{projectsInfo.map((project) => {
    return (
      <Paper
        key={project.name}
        elevation={24}
        sx={{
          width: "100%",
          background: `#E3EAFD`,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className="container"
          sx={{ borderRadius: 10, m: 2, width: "90%", position: "relative" }}
        >
          <CardMedia
            className="project-gif"
            component="img"
            image={project.gif}
            alt=""
          />
          <Box className="wrapper-info">
            <Typography variant="h3" color={"white"} fontWeight={"bold"} mt={1}>
              Built With
            </Typography>
            <Box className="center-all">
             <IconMap stack={project.stack}/>
            </Box>
            <div>
              <Button
                href={project.buttons[0].link}
                target={"_blank"}
                sx={{
                  color: "#fff",
                  borderRadius: 25,
                  fontSize: 14,
                  border: "3px solid white",
                  my: 1,
                  pt: 0.9,
                  textTransform:'none'
                }}
              >
                <Typography variant="h5" color={"white"} px={2}>
                  More Info
                </Typography>
              </Button>
            </div>
          </Box>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Stack spacing={0}>
              <Typography variant="h4" color={"#4345E8"}>
                {project.name}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                py={1.5}
              >
                <ButtonMap buttons={project.buttons}/>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    );
  })}
  </>
  
  )
};

export default ProjectsCard;
