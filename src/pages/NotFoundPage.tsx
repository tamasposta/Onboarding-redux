import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100svh",
      }}
    >
      <Typography variant="h1">404 Not Found</Typography>
      <Link to="/">
        <Button variant="contained">Go back to Homepage</Button>
      </Link>
    </Box>
  );
}
