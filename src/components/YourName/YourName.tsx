import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { setName } from "../../redux/profile.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SetCurrentComponentType } from "../ProfileCreation.types";

export default function YourName({
  setCurrentComponent,
}: {
  setCurrentComponent: SetCurrentComponentType;
}) {
  const [nameState, setNameState] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setName(nameState)) && setCurrentComponent("yourEmail");
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
      <Typography variant="h4">What's your name?</Typography>
      <TextField
        id="standard-basic"
        label="Your Name"
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setNameState(event.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<ChevronRightIcon />}
        onClick={() => handleSubmit()}
      >
        Next
      </Button>
    </Box>
  );
}
