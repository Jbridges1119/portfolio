import React from 'react'
//MUI5
import { Grid, Typography } from '@mui/material'


const Greetings = () => {
  return (
    <>
    <Typography variant="h2" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'pink'}}>
  Hello,
</Typography><Typography variant="h2" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'white'}}>
  I'm Jeff Bridges.
</Typography>
<Typography variant="h2" sx={{display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        color: 'white'}}>
  I'm A Web Developer.
</Typography>
    </>
  )
}

export default Greetings