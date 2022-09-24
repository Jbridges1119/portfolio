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
          <Paper key={project.name} elevation={16} sx={cardBackground}>
            {project.name === "Bored?GameNyte!" && (
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

            <Box className="container" sx={gifBackground}>
              <CardMedia
                className="project-gif"
                component="img"
                image={project.gif}
                alt=""
              />
              <Box className="wrapper-info" sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <Typography variant="h4" sx={hoverHeader}>
                  Built With:
                </Typography>
                <Box
                  className="center-all"
                  sx={{ display: { xs: "none", sm: "flex" }, width:'80%' }}
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
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'space-between',justifyContent:'space-between', height:'100%'}}>
                  <Typography
                    variant="h4"
                    color={"#0F0D78"}
                    fontWeight={"bold"}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="body2" py={1}>{project.description}</Typography>

                  <Box className="center-all" sx={{ display: { md: "none" } }}>
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
