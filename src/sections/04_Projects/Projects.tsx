import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import bgn from '../../assets/Nyte-Game.gif'
import '../../styles/04_ProjectsStyle/Projects.css'
const Projects = () => {
  return (
    <Box sx={{height: '800px',  background: `white`, position: 'relative', width:'100%',}}>
      <Box height={'15vh'}></Box>
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
            <Card  sx={{width:'100%',background: `#E3EAFD`}}>
            <CardMedia
        component="img"
        image={bgn}
        alt=""
        sx={{
          objectFit: "fit",
          // maxWidth: "400px",
          // maxHeight: "600px",
          borderRadius: "20px",
        }}
      />
  <Typography variant='h6'>Title of Page</Typography>

              </Card></Grid><Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={5.75} md={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#E3EAFD`}}>
              </Paper></Grid>
          
            </Grid>
            </Grid></Grid>
            
    </Box>
  )
}

export default Projects