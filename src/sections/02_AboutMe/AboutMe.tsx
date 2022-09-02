import { Grid } from '@mui/material'
import { Box, } from '@mui/system'
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Story from './components/Story'
import Picture from './components/Picture'
const AboutMe = () => {
  return (
    <Box sx={{  background: `white`, position: 'relative', width:'100%',}}>
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
          <Grid item md={10} sm={10} xs={10}>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          
            <Grid item xs={12} sm={12} md={5}>
              <Story/>
            </Grid><Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Picture/>
            </Grid>
          
            </Grid>
            </Grid></Grid>
    
    </Box>
  )
}

export default AboutMe