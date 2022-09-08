//MUI
import { Box, Button, Stack } from "@mui/material";
//Context hook
import { usePageLocation } from "../../../hooks/pageContext";

//Style
import { motion, useScroll, useTransform } from "framer-motion";
import EastIcon from '@mui/icons-material/East';
import CallMadeIcon from '@mui/icons-material/CallMade';
type Props = { 
  speed: number;
}

const mainButtons = {
  offScreen: {  filter: 'blur(10px)', opacity: 0 },
  onScreen: {
   
    // scale: [1,1,1, 1.2,1],
    opacity: 1,
    filter: 'blur(00px)',
    transition:{delay: 1.25, type: "spring", bounce: 0.4, duration: 3 },
  },
}; 


const MainButtons: React.FC<Props> = ({speed}) => {
  const { currentPercent,projectSect, scrollToSection  } = usePageLocation();
  const scrollAmount = 350;
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const zIndex = useTransform(scrollY, [0, 200], [100, 0]);
  // const yRange = useTransform(scrollY, [0, scrollAmount], [0, 1000 * speed]);
    const filter = useTransform(
      scrollY,
      [0, scrollAmount],
      ["blur(0px)", "blur(10px)"]
    );
  return (
    <motion.div className="fill" style={{ opacity,  position: 'fixed', y: '-7%', filter, zIndex }}
 
    ><motion.div className="fill" 
    initial={'offScreen'}
    animate={'onScreen'}
    variants={mainButtons}
    >
    <Box
      sx={{
        display: "flex",
        justifyContent: { lg: "flex-start", xs: "center" },
      }}
    > 
      <Stack spacing={1}>
        <Button
        onClick={()=> scrollToSection(projectSect)}
          variant="contained"
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex: 1,
            color: "#fff",
            border: "4px solid white",
            borderRadius: 20,
            fontSize: 22,
            fontWeight: "bold",
            width: "220px",
            pt: 1.2,
            background: "none",

            "&:hover": {
              background: `linear-gradient(100deg, #24a4ea, #379deb 25%, #b76bf0)`,
            },
          }}
        >
          Projects <motion.div style={{display:'flex', justifyContent:'center'}}><CallMadeIcon sx={{width: '20px'}}/></motion.div >
        </Button>
        <Button
          href="https://resume.creddle.io/resume/j5ndksyhq9g"
          target="_blank"
          sx={{
            zIndex: 1,
            color: "#fff",
            border: "4px solid white",
            borderRadius: 20,
            fontSize: 22,
            fontWeight: "bold",
            width: "220px",
            pt: 1.2,
            background: "none",

            "&:hover": {
              background: `linear-gradient(100deg, #24a4ea, #379deb 25%, #b76bf0)`,
            },
          }}
          variant="contained"
        >
          Resume
        </Button>
      </Stack>
    </Box></motion.div></motion.div>
  );
};

export default MainButtons;
