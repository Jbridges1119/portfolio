//MUI
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
//Syle
import { motion } from "framer-motion";
//Front-End Helper
import {
  imagesSpreader,
  frontendInfoTop,
  frontendInfoBot,
} from "../../../helpers/SkillsIconHelper";

const Frontend: React.FC = () => {
  return (<Stack>
    <Typography
  variant="h1"
  sx={{
    color: "#0F0D78",
    textAlign: "center",
    cursor: "default",
    mb:1,
    fontWeight: "bold",
    display: {md: 'none'}
  }}
>
  Skills
</Typography>
<Divider sx={{ display: {md: 'none'}}}/>
    <motion.div
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
              color: "#0F0D78",
              textAlign: "left",
              cursor: "default",
              pt: 1,
              fontWeight: "bold",
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
    </motion.div></Stack>
  );
};

export default Frontend;
