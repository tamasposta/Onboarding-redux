import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100svh",
        gap: "20px",
      }}
    >
      <Typography variant="h3">Hi. Let’s create your profile!</Typography>
      <Link to="/profile-creation">
        <Button variant="contained">Get Started</Button>
      </Link>
    </Box>
  );
}
