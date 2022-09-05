
import BS from '../../../assets/01_Front/BS.png'
import CSS from '../../../assets/01_Front/CSS.png'
import Framer from '../../../assets/01_Front/framer-motion.webp'
import HTML from '../../../assets/01_Front/HTML5.png'
import JQ from '../../../assets/01_Front/JQ.png'
import JS from '../../../assets/01_Front/JS.png'

import MUI from '../../../assets/01_Front/mui.png'
import RT from '../../../assets/01_Front/REACT.png'
import Ruby from '../../../assets/01_Front/Ruby.png'
import SASS from '../../../assets/01_Front/SASS.png'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { CardMedia } from '@mui/material';
import { motion } from 'framer-motion'

const Frontend = () => {
  const imgTop = [JS, HTML,  RT, JQ, Ruby,]
  const imgBot = [CSS, MUI,BS, SASS, Framer]
  const imagesTop = imgTop.map((image => {
    return (
      <Box sx={{ p:1}}>
      <CardMedia
        component="img"
 
        image={image}
        alt=""
        sx={{objectFit: "contain",  maxHeight:'80px'}}
     
      />
      </Box>
    )
  }))

  const imagesBot = imgBot.map((image => {
    return (
      <Box sx={{p:1}}>
      <CardMedia
        component="img"
 
        image={image}
        alt=""
        sx={{objectFit: "contain",  maxHeight:'80px'}}
     
      />
     </Box>
    )
  }))

  return (
    <motion.div whileHover={{ scale: 1.1 }} style={{minHeight:'190px', display:'flex'}}>
     <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          
        >
          
            <Grid item xs={12}  md={6}>
        
      <Typography variant='h2' sx={{ color: "#4345E8", textAlign:'left',cursor:"default"}}>Frontend</Typography>
      </Grid>
      <Grid item xs={12}  md={6}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
      {imagesTop}

      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
      
      {imagesBot}
      </Box>
      </Grid></Grid>
    
   
      </motion.div>
  )
}

export default Frontend