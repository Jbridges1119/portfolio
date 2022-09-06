//MUI
import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
//Style
import { motion } from "framer-motion";
//IconInfo
import {
  backendInfo,
  systemsInfo,
  testingInfo,
  imagesSpreader,
} from "../../../helpers/SkillsIconHelper";

interface Skill {
  name: string;
  logo: any;
}

const skillsTab = [
  { name: "Back-End", logo: backendInfo },
  { name: "Testing", logo: testingInfo },
  { name: "Systems", logo: systemsInfo },
];

const list = skillsTab.map((skill: Skill) => {
  return (
    <div key={skill.name}>
      <Divider />
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
              {skill.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {imagesSpreader(skill.logo)}
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
});

const RestOfSkills = () => {
  return <>{list}</>;
};

export default RestOfSkills;
