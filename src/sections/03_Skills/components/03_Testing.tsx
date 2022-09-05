import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Chai from '../../../assets/03_Testing/chai.png'
import Cypress from '../../../assets/03_Testing/cypress.svg'
import ESLint from '../../../assets/03_Testing/eslint.png'
import JEST from '../../../assets/03_Testing/JEST.png'
import MC from '../../../assets/03_Testing/MC.png'


const Testing = () => {
  
    const img = [MC, Chai, ESLint, JEST, Cypress]
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
        
      <Typography variant='h2'sx={{ color: "#4345E8", textAlign:'left',cursor:"default"}}>Testing</Typography>
      </Grid>
      <Grid item xs={12}  md={6}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
      {images}
      </Box>
      </Grid></Grid>
       
      
      </motion.div>
    )
}

export default Testing