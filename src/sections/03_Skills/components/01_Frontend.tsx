//MUI
import { Box, Grid, Typography } from "@mui/material";
//Syle
import { motion } from "framer-motion";
//Front-End Helper
import {
  imagesSpreader,
  frontendInfoTop,
  frontendInfoBot,
} from "../../../helpers/SkillsIconHelper";
import { usePageLocation } from "../../../hooks/pageContext";

const Frontend = () => {
  const { currentPercent, skillSect } = usePageLocation();
  return (
    <motion.div ref={skillSect}
      whileHover={{ scale: 1.15 }}
      style={{ minHeight: "160px", display: "flex" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h3"
            sx={{
              color: "#4345E8",
              textAlign: "left",
              cursor: "default",
              pt: 1,
            }}
          >
            Front-End
          </Typography>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {imagesSpreader(frontendInfoTop)}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {imagesSpreader(frontendInfoBot)}
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Frontend;
