import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { imagesSpreader } from "../../../helpers/SkillsIconHelper";
import { testingInfo } from "../../../helpers/SkillsIconHelper";

const Testing = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ height: "171px", display: "flex" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h2"
            sx={{ color: "#4345E8", textAlign: "left", cursor: "default" }}
          >
            Testing
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
            {imagesSpreader(testingInfo)}
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Testing;
