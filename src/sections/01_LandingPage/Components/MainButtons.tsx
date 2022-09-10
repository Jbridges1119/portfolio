//MUI
import { Box, Button, Stack } from "@mui/material";
//Context hook
import { usePageLocation } from "../../../hooks/pageContext";
//Style
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  speed: number;
};

const mainButtons = {
  offScreen: { filter: "blur(10px)", opacity: 0 },
  onScreen: {
    opacity: 1,
    filter: "blur(00px)",
    transition: { delay: 1.25, type: "spring", bounce: 0.4, duration: 3 },
  },
};

const MainButtons: React.FC<Props> = ({ speed }) => {
  const { projectSect, scrollToSection, buttonAnimate, letterAnimate } =
    usePageLocation();
  const scrollAmount = 350;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const zIndex = useTransform(scrollY, [0, 150], [100, 0]);
  
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ["blur(0px)", "blur(10px)"]
  );
  return (
    <motion.div
      className="fill"
      style={{ opacity, position: "fixed", y: "-10%", filter, zIndex }}
    >
      <motion.div
        className="fill"
        initial={"offScreen"}
        animate={"onScreen"}
        variants={mainButtons}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "flex-start", xs: "center" },
           
          }}
        >
          <Stack spacing={1}>
            <motion.div
              initial="preHover"
              whileHover="onHover"
              whileTap="onTap"
              variants={buttonAnimate}
            >
              <Button
                onClick={() => scrollToSection(projectSect)}
                variant="contained"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                  color: "#fff",
                  border: "4px solid white",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: "bold",
                  textTransform: "none",
                  width: "220px",
                  background: "none",
                  mt: {lg:0, xs:1},
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                {"Projects".split("").map((letter, i) => {
                  return (
                    <motion.span
                      key={i}
                      style={{ paddingInline: "0.07em" }}
                      variants={letterAnimate}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </Button>
            </motion.div>
            <motion.div
              initial="preHover"
              whileHover="onHover"
              whileTap="onTap"
              variants={buttonAnimate}
            >
              <Button
                href="https://resume.creddle.io/resume/j5ndksyhq9g"
                target="_blank"
                sx={{
                  zIndex: 1,
                  color: "#fff",
                  border: "4px solid white",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: "bold",
                  width: "220px",
                  textTransform: "none",
                  background: "none",
                  
                  "&:hover": {
                    background: "none",
                  },
                }}
                variant="contained"
              >
                {"Resume".split("").map((letter, i) => {
                  return (
                    <motion.span
                      key={i}
                      style={{ paddingInline: "0.08em" }}
                      variants={letterAnimate}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </Button>
            </motion.div>
          </Stack>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default MainButtons;
