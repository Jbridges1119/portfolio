import { Grid, Paper } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const AboutMe = () => {
  return (
    <Box sx={{height: '800px',  background: `white`, position: 'relative', width:'100%',}}>
      <Typography sx={{ color: "#81807c", fontSize: 20 }}>
        <ArrowDownwardIcon sx={{ fontSize: 18 }} />
        Scroll Down
        <ArrowDownwardIcon sx={{ fontSize: 18 }} />
      </Typography>
       <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={10} xs={11}>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          
            <Grid item xs={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#b76bf0`, opacity: 0.15}}>hellow</Paper></Grid><Grid item xs={0.25}></Grid>
            <Grid item xs={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#379deb`, opacity: 0.15}}>hellow</Paper></Grid>
            <Grid item xs={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#24a4ea`, opacity: 0.15}}>hellow</Paper></Grid><Grid item xs={0.5}></Grid>
            <Grid item xs={5}>
            <Paper elevation={8} sx={{width:'100%',height: '300px',background: `#379deb`, opacity: 0.15}}>hellow</Paper></Grid>
            </Grid>
            </Grid></Grid>
    
    </Box>
  )
}

export default AboutMe