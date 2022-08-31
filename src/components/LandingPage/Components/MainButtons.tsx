import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const MainButtons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={3}>
        <Button
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
          }}
          variant="contained"
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
