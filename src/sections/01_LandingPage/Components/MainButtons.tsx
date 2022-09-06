//MUI
import { Box, Button, Stack } from "@mui/material";
//Context hook
import { usePageLocation } from "../../../hooks/pageContext";

const MainButtons = () => {
  const { currentPercent,projectSect, scrollToSection  } = usePageLocation();
  return (
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
    </Box>
  );
};

export default MainButtons;
