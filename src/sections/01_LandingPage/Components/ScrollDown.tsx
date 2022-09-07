import { Box, Typography } from '@mui/material';
import { usePageLocation } from '../../../hooks/pageContext';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const ScrollDown = () => {
  const { currentPercent,  aboutSect,scrollToSection } = usePageLocation();
  return (
    <>
    <button style={{ all: "unset", position:'relative', zIndex:'100' }} onClick={()=> scrollToSection(aboutSect)}>
    <Typography
      sx={{ color: "#81807c", fontSize: 20, cursor: "pointer" }}
    >
      <ArrowDownwardIcon sx={{ fontSize: 18 }} />
      Scroll Down
      <ArrowDownwardIcon sx={{ fontSize: 18 }} />
    </Typography>
  </button>
  <Box height={"5vh"}></Box></>
  )
}

export default ScrollDown