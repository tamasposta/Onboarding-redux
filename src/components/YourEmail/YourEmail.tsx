import { Box, Button, TextField, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../redux/profile.slice";
import { useState } from "react";

export default function YourEmail({ setCurrentComponent }: any) {
  const [emailState, setEmailState] = useState<string>("");
  const profile = useSelector((state) => (state as any).profile);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setEmail(emailState)) && setCurrentComponent("yourHobbies");
  };

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
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4">
        What’s your email address, {profile.name}?
      </Typography>
      <TextField
        id="standard-basic"
        label="Your Email"
        variant="standard"
        onChange={(event) => setEmailState(event.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<ChevronRightIcon />}
        onClick={() => handleSubmit()}
      >
        next
      </Button>
    </Box>
  );
}
