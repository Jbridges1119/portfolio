//MUI
import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
//Hook
import { usePageLocation } from "../../../hooks/pageContext";

const ScrollDown: React.FC = () => {
  const { aboutSect, scrollToSection } = usePageLocation();
  const arrowTextBoxSX = {
    background: `white`,
    position: "relative",
    width: "100%",
    zIndex: 2,
  };
  const buttonTextSX = { color: "#81807c", fontSize: 20, cursor: "pointer" };
  const arrowSizeSX = { fontSize: 18 };
  return (
    <Box sx={arrowTextBoxSX}>
      <button
        style={{ all: "unset", position: "relative", zIndex: "100" }}
        onClick={() => scrollToSection(aboutSect)}
      >
        <Typography sx={buttonTextSX}>
          <ArrowDownwardIcon sx={arrowSizeSX} />
          Scroll Down
          <ArrowDownwardIcon sx={arrowSizeSX} />
        </Typography>
      </button>
      <Box height={"5vh"} />
    </Box>
  );
};

export default ScrollDown;
