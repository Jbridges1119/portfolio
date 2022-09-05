import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import EX from '../../../assets/02_Back/EX.png'
import NODE from '../../../assets/02_Back/NODE.png'
import PSQL from '../../../assets/02_Back/PSQL.png'
import Rails from '../../../assets/02_Back/Rails.png'

const Backend = () => {
  const img = [EX, NODE, PSQL, Rails]
  const images = img.map((image => {
    return (
      <Box sx={{p:1}}>
      <CardMedia
        component="img"

        image={image}
        alt=""
        sx={{objectFit: "contain", maxHeight:'80px'}}
     
      />
 </Box>
    )
  }))

  return (
    <motion.div whileHover={{ scale: 1.1 }} style={{height:'171px', display:'flex'}}>
       <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          
        >
          
            <Grid item xs={12}  md={6}>
        
      <Typography variant='h2'sx={{ color: "#4345E8", textAlign:'left'}}>Backend</Typography>
      </Grid>
      <Grid item xs={12}  md={6}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      {images}
      </Box>
      </Grid></Grid>
     
      </motion.div>
  )
}

export default Backend