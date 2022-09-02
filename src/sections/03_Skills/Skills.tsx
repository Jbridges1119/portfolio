import { Grid } from '@mui/material'
import { Box, } from '@mui/system'
import bubbles from '../../assets/bubl.webp'
import TechSkills from './components/TechSkills'
const AboutMe = () => {
  return (
    <Box sx={{  background: `white`, position: 'relative', width:'100%',}}>
      <Box height={'15vh'}></Box>
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
             <TechSkills/>
            </Grid><Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={12} md={5}>
             
            </Grid>
          
            </Grid>
            </Grid></Grid>
    
    </Box>
  )
}

export default AboutMe