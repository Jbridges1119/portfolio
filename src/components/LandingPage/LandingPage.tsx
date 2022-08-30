import React from 'react'

//MUI5
import { Grid } from '@mui/material'

//styles
import '../../styles/LandingPage/LandingPage.css'
//Particles
import Bubbles from './Components/Bubbles'
//Components
import Waves from './Components/Waves'
import Greetings from './Components/Greetings'
const LandingPage: React.FC = () => {
  
  return (
<div className="hero" id="tsparticles">
  <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
<Greetings/>

</Grid>
    <Waves/>
   <Bubbles/>
</div>
  )
}

export default LandingPage