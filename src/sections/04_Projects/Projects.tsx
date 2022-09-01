import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Projects = () => {
  return (
    <Box sx={{height: '800px',  background: `white`, position: 'relative', width:'100%',}}>
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
            <Paper elevation={8}  sx={{width:'100%',height: '300px',background: `hsla(206, 82%, 57%, 0.15)`, }}>
    
              </Paper></Grid><Grid item xs={0.25} lg={0.75}></Grid>
            <Grid item xs={12} sm={5.75} md={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#379deb`, opacity: 0.15}}>hellow</Paper></Grid>
          
            </Grid>
            </Grid></Grid>
    
    </Box>
  )
}

export default Projects