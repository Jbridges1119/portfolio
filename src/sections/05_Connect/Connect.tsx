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
import ConnectForm from './components/ConnectForm'
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
        <Grid item lg={8} md={8} xs={10}>
          <Paper
            elevation={8}
            sx={{
              width: "100%",
              background: `#E3EAFD`,
              height:'100%'
              // background: `hsla(206, 82%, 57%, 0.15)`,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
    height={'100%'}
            >
              <Grid item xs={11}  lg={3}>
                <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} >
                <Typography mt={2} color={'#4345E8'}variant="h4">Let's Connect!</Typography>
                <Typography variant="h6" >
                  I'd love to here from you. <br/>
                  If you want to grab a "remote" coffee
                  and chat, please feel free to leave me a message and say hello!
                </Typography></Box>
              </Grid>
              <Grid item xs={12}  lg={0.5}></Grid>
              <Grid item xs={11}  lg={7.5}>
                <ConnectForm/>
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
