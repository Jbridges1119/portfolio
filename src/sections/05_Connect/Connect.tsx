//MUI
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
//Components
import ConnectForm from "./components/ConnectForm";

const Connect = () => {
  return (
    <Box
      sx={{
        background: `white`,
        position: "relative",
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
        <Grid item xl={7} lg={8} md={8} xs={10}>
          <Paper
            elevation={24}
            sx={{
              width: "100%",
              background: `#E3EAFD`,
              borderRadius: 5,
              // background: `hsla(206, 82%, 57%, 0.15)`,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={11} lg={3}>
                <Stack spacing={2}>
                  <Typography mt={4} color={"#4345E8"} variant="h3">
                    Let's Connect!
                  </Typography>
                  <Divider />
                  <Typography variant="h6">
                    I'd love to here from you! <br />
                    If you want to grab a "remote" coffee and chat, please feel
                    free to leave me a message and say hello.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={0.5}></Grid>
              <Grid item xs={11} lg={7.5}>
                <ConnectForm />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Box height={"10vh"}></Box>
    </Box>
  );
};

export default Connect;
