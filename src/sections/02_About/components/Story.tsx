//MUI
import { Stack, Typography, Divider } from "@mui/material";
//Style
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  speed: number;
};

const Story: React.FC<Props> = ({ speed }) => {
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [50, 100 * speed]);
  const textBodySX = { color: "black", textAlign: "left" };
  return (
    <Stack spacing={2}>
      <motion.div style={{ y: yValue }}>
        <Typography
          variant="h1"
          sx={{ color: "#0F0D78", textAlign: "left", fontWeight: "bold" }}
        >
          Hello!
        </Typography>
      </motion.div>
      <Divider />
      <Typography variant="body1" sx={textBodySX}>
        My name is Jeff Bridges and I'm a passionate Full-Stack Developer. I
        pivoted from being a Certified HVAC/R Technician due to always having an
        interest in problem solving and bringing ideas to life. With Web
        Development, I can nurture my creativity through a new medium and I'm
        excited to build intuitive, responsive, and efficient web applications.
        I graduated from Lighthouse Labs Bootcamp in August 2022 and am looking
        to build upon the experiences I gained there. Currently I'm learning
        C# and refining the skills already learned so that I can begin work on my next project!
      </Typography>
      <Typography variant="body1" sx={textBodySX}>
        I'd love to hear from you. Whether it's a job opportunity, a project
        collaboration, or just to chat. Please feel free to contact me.
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ ...textBodySX, py: 3 }}>
        <i>~ Don't Try To Be The Best. Just Try To Be 1% Better Everyday.</i>
      </Typography>
    </Stack>
  );
};

export default Story;
