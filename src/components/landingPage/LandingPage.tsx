import { Typography } from '@mui/material'
import React from 'react'
//styles
import '../../styles/LandingPage/LandingPage.css'
//Particles
import Bubbles from './Bubbles'


const LandingPage: React.FC = () => {
  
  return (
<div className="hero" id="tsparticles">
<Typography variant="h1" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'pink'}}>
  Hello,
</Typography><Typography variant="h1" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'white'}}>
  I'm Jeff<s>Bezos</s>
</Typography><Typography variant="h1" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'white'}}>
  Bridges
</Typography>
<Typography variant="h1" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'white'}}>
  I'm A Web Developer
</Typography>
   <div className="w wave"></div>
   <div className="w wave2"></div>
   <div className="w wave3"></div>
   <div className="w wave4"></div>
   <Bubbles/>
</div>
  )
}

export default LandingPage