import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { motion } from "framer-motion"
import GITH from '../../../assets/04_Systems/GITH.png'
import GITP from '../../../assets/04_Systems/GITP.png'
import NPM from '../../../assets/04_Systems/NPM.png'
import VSCode from '../../../assets/04_Systems/VSCode.png'

const Systems = () => {
  
    const img = [GITH, GITP, NPM, VSCode]
    const images = img.map((image => {
      return (
        <Box sx={{p:1}}>
        <CardMedia
          component="img"

          image={image}
          alt=""
          sx={{objectFit: "contain",maxHeight:'80px'}}
       
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
        
      <Typography variant='h2'sx={{ color: "#4345E8", display:'flex', alignContent:'center',cursor:"default"}}>Systems</Typography>
      </Grid>
      <Grid item xs={12}  md={6}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      {images}
      </Box>
      </Grid></Grid>
      
        </motion.div>
  )
}

export default Systems