import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import '../../../styles/01_LandingPage/MainButtons.css'
const MainButtons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={3}>
      {/* <div className="buttons">
  <button className="blob-btn">
    Projects
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg></div> */}
        <Button variant="contained"
         sx={{
          zIndex: 1,
          color: "#fff",
          border: "4px solid white",
          borderRadius: 20,
          fontSize: 25,
          fontWeight: "bold",
          width: "250px",
          pt: 1.2,
          background: "none",

          "&:hover": {
            background: `linear-gradient(100deg, #24a4ea, #379deb 25%, #b76bf0)`,
          },
        }}
         
        >
          Projects
        </Button>
        <Button
          href="https://resume.creddle.io/resume/j5ndksyhq9g"
          target="_blank"
          sx={{
            zIndex: 1,
            color: "#fff",
            border: "4px solid white",
            borderRadius: 20,
            fontSize: 25,
            fontWeight: "bold",
            width: "250px",
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
    </Box>
  );
};

export default MainButtons;
