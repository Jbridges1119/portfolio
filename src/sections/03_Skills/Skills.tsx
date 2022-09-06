//MUI
import {  Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
//Components
import RestOfSkills from "./components/02_RestOfSkills";
import Frontend from "./components/01_Frontend";

const AboutMe = () => {
  return (
    <Box
      sx={{
        background: `white`,
        position: "relative",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Box height={"15vh"}></Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={7} md={7} xs={10}>
          <Paper
            elevation={24}
            sx={{
              width: "100%",
              background: `#E3EAFD`,
              my: 3,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={10}>
              <Stack spacing={1} my={3}>
                <Frontend />
                <RestOfSkills />
              </Stack>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
