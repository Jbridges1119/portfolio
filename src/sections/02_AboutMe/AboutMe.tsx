import { Grid } from '@mui/material'
import { Box, } from '@mui/system'
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Story from './components/Story'
import Picture from './components/Picture'
const AboutMe = () => {
  return (
    <Box sx={{  background: `white`, position: 'relative', width:'100%',zIndex:3}}>
      <Box height={'15vh'}>
        <button style={{all: 'unset'}}>
      <Typography sx={{ color: "#81807c", fontSize: 20, cursor:'pointer' }}>
        <ArrowDownwardIcon sx={{ fontSize: 18 }} />
        Scroll Down
        <ArrowDownwardIcon sx={{ fontSize: 18 }} />
      </Typography></button></Box>
       <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={10}>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          
            <Grid item xs={12}  md={5.75} order={{ xs: 3, md: 1 }}>
              <Story/>
            </Grid>
            <Grid item xs={0.25} lg={0.5} ></Grid>
            <Grid item xs={12}  md={4} order={{ xs: 1, md: 3 }}>
              <Picture/>
            </Grid>
          
            </Grid>
            </Grid></Grid>
    
    </Box>
  )
}

export default AboutMe