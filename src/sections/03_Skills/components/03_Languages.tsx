//MUI
import { Box, Divider, Grid, Typography } from "@mui/material";
//Style
import { motion } from "framer-motion";
//IconInfo
import {
  languages,
  imagesSpreader,
} from "../../../helpers/SkillsIconHelper";

interface Skill {
  name: string;
  logo: any;
}

const skillsTab = [
  { name: "Languages", logo: languages },

];

const list = skillsTab.map((skill: Skill) => {
  return (
    <div key={skill.name}>
     
      <motion.div
        whileHover={{ scale: 1.15 }}
        style={{ height: "150px", display: "flex" }}
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
                // color: "#4345E8",
                color: "#0F0D78",
                textAlign: "left",
                cursor: "default",
                pt: 1,
                fontWeight: "bold",
              }}
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
      <Divider />
    </div>
  );
});

const Languages: React.FC = () => {
  return <>{list}</>;
};

export default Languages;
