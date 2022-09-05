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
import { motion } from "framer-motion";
import React from "react";
import bgn from "../../assets/Nyte-Game.gif";
import "../../styles/04_ProjectsStyle/Projects.css";

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
        <Grid item md={10} sm={11} xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={5.75} md={5}>
              <Paper
                elevation={24}
                sx={{
                  width: "100%",
                  background: `#E3EAFD`,
my:3,
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
                      image={bgn}
                      alt=""
                      sx={{
                        objectFit: "fit",
                        // maxWidth: "400px",
                        // maxHeight: "600px",
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
                        Bored?GameNyte!
                      </Typography>
                      <Typography variant="body1">
                        A web application for board game and game
                        night enthusiasts, to help facilitate the organizing of
                        game collections, scheduling events and making sure
                        everyone is prepared to maximize their time together.
                      </Typography>
                      <Box display={"flex"} justifyContent={"space-around"} sx={{pb:4
                      }}>
                        <Button
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
                          Github
                        </Button>
                        <Button
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
                          Video
                        </Button>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={5.75} md={5}>
            <Paper
                elevation={24}
                sx={{
                  width: "100%",
                  background: `#E3EAFD`,
                  my:3,
                  borderRadius: 5,
                }}
              >
                <motion.div
                  initial={{ x: 100, scale: 0.85, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    
                    rotate: [0, -10, 0],
                    transition: {delay:1, type: "spring", bounce: 0.4, duration: 1 },
                  }}
                >
                  <Paper elevation={24} sx={{ borderRadius: 5 }}>
                    <CardMedia
                      component="img"
                      image={bgn}
                      alt=""
                      sx={{
                        objectFit: "fit",
                        // maxWidth: "400px",
                        // maxHeight: "600px",
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
                       The Complete Story
                      </Typography>
                      <Typography variant="body1">
                      Story telling web application where a user posts the beginning of a story and other users are able to leave contributions that can be chosen to be added to the original story.
                      </Typography>
                      <Box display={"flex"} justifyContent={"space-around"} sx={{pb:4
                      }}>
                        <Button
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
                          Github
                        </Button>
                        {/* <Button
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
                          Video
                        </Button> */}
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={5.75} md={5}>
              <Paper
                elevation={24}
                sx={{
                  width: "100%",
                  background: `#E3EAFD`,
                  my:3,
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
                      image={bgn}
                      alt=""
                      sx={{
                        objectFit: "fit",
                        // maxWidth: "400px",
                        // maxHeight: "600px",
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
                      Interview Scheduler
                      </Typography>
                      <Typography variant="body1">
                      A single-page app to help a user create, edit, and track an hour long interview with one of 5 interviewers, within the hours of 12 PM - 5 PM, Mon-Fri.
                       
                      </Typography>
                      <Box display={"flex"} justifyContent={"space-around"} sx={{pb:4
                      }}>
                        <Button
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
                          Github
                        </Button>
                        <Button
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
                          Live
                        </Button>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={5.75} md={5}>
            <Paper
                elevation={24}
                sx={{
                  width: "100%",
                  background: `#E3EAFD`,
                  my:3,
                  borderRadius: 5,
                }}
              >
                <motion.div
                  initial={{ x: 100, scale: 0.85, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    
                    rotate: [0, -10, 0],
                    transition: {delay:1, type: "spring", bounce: 0.4, duration: 1 },
                  }}
                >
                  <Paper elevation={24} sx={{ borderRadius: 5 }}>
                    <CardMedia
                      component="img"
                      image={bgn}
                      alt=""
                      sx={{
                        objectFit: "fit",
                        // maxWidth: "400px",
                        // maxHeight: "600px",
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
                       Tweeter
                      </Typography>
                      <Typography variant="body1">
                      Tweeter is a simple, single-page social media platform where users can leave 140 character posts. Users can also read through their list of tweets in chronological order.
                      </Typography>
                      <Box display={"flex"} justifyContent={"space-around"} sx={{pb:4
                      }}>
                        <Button
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
                          Github
                        </Button>
                        {/* <Button
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
                          Video
                        </Button> */}
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
