import { Box, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { setBirthday } from "../../redux/profile.slice";
import dayjs from "dayjs";

export default function YourBirthday() {
  const dispatch = useDispatch();

  const handleDateChange = (birthday: dayjs.Dayjs | null) => {
    if (birthday) {
      const formattedDate = dayjs(birthday).format("DD-MM-YYYY");
      dispatch(setBirthday(formattedDate));
    }
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
      <Typography variant="h4">Select your birthday:</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Select your birthday" onChange={handleDateChange} />
      </LocalizationProvider>

      <Link to="/profile">
        <Button variant="contained" endIcon={<ChevronRightIcon />}>
          Finalize
        </Button>
      </Link>
    </Box>
  );
}
