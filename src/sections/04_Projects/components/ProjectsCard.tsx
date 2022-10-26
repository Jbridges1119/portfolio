//MUI
import {
  Button,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
//Helper
import { projectsInfo } from "../../../helpers/ProjectsHelper";
//Components
import ButtonMap from "./ButtonMap";
import IconMap from "./IconMap";

const ProjectsCard: React.FC = () => {
  const cardBackground = {
    width: "100%",
    background: `#E3EAFD`,
    // background: ` #24a4ea1F`,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const gifBackground = {
    borderRadius: 10,
    m: 2,
    width: "90%",
    position: "relative",
  };
  const hoverHeader = {
    color: "white",
    fontWeight: "bold",
    // my: 1,
    display: { xs: "none", sm: "block" },
  };
  const hoverButton = {
    color: "#fff",
    borderRadius: 25,
    // fontSize: 14,
    border: "3px solid white",
    // my: 1,
    pt: 0.7,
    textTransform: "none",
  };
  const buttonText = {
    fontColor: "white",
    fontWeight: "bold",
    px: 2,
    fontFamily: "DM Sans",
  };

  return (
    <>
      {projectsInfo.map((project) => {
        return (
          <Paper key={project.name} className="container" elevation={16} sx={cardBackground}>
            {project.name === "Cam Air" && (
              <Typography
                variant="h1"
                sx={{
                  color: "#0F0D78",
                  textAlign: "center",
                  cursor: "default",
                  my: 1,
                  fontWeight: "bold",
                  display: { md: "none" },
                }}
              >
                Projects
              </Typography>
            )}
            {/*Mouse hover effect located in project.scss file*/}
            <Box  sx={gifBackground}>
              <CardMedia
                className="project-gif"
                component="img"
                image={project.gif}
                alt=""
              />
              <Box className="wrapper-info" >
                <Typography variant="h4" sx={hoverHeader}>
                  Built With:
                </Typography>
                <Box
                  className="center-all"
                  sx={{ display: { xs: "none", sm: "flex" }}}
                >
                  <IconMap stack={project.stack} />
                </Box>
                <div>
                  <Button
                    href={project.buttons[0].link}
                    target={"_blank"}
                    sx={hoverButton}
                  >
                    <Typography variant="h6" sx={buttonText}>
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
              height={'100%'}
            >
              <Grid item xs={11} height={'100%'}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'space-between',justifyContent:'space-around', height:'100%'}}>
                  <Typography
                    variant="h4"
                    color={"#0F0D78"}
                    fontWeight={"bold"}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="body2" py={1}>{project.description}</Typography>

                  <Box className="center-all" sx={{ display: { sm: "none" } }}>
                    <IconMap stack={project.stack} />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    py={1.5}
                  >
                    <ButtonMap buttons={project.buttons} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
};

export default ProjectsCard;
