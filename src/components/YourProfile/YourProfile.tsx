import { FiberManualRecord } from "@mui/icons-material";
import { Box, ListItem, ListItemIcon, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import dayjs from "dayjs";

export default function YourProfile() {
  const profile = useSelector((state: RootState) => state.profile);
  console.log(profile.hobbies);

  const formatBirthday = (birthday: string | Date | dayjs.Dayjs) => {
    if (typeof birthday === "string") {
      return birthday;
    } else if (birthday instanceof Date) {
      return birthday.toISOString().split("T")[0];
    } else if (dayjs.isDayjs(birthday)) {
      return birthday.format("YYYY-MM-DD");
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
    >
      <Typography variant="h4" color="primary" sx={{ textAlign: "center" }}>
        Congratulations! Your profile is complete:
      </Typography>
      <Box>
        <Typography variant="h5">Your name: {profile.name}</Typography>
        <Typography variant="h5">Your email: {profile.email}</Typography>
        <Typography variant="h5">
          Your Hobbies:
          {profile.hobbies.map((hobby: string) => (
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "50px" }}
            >
              <ListItemIcon sx={{ minWidth: "0px" }}>
                <FiberManualRecord sx={{ width: "16px" }} color="primary" />
              </ListItemIcon>
              <ListItem sx={{ fontSize: "18px" }} color="secondary">
                {hobby}
              </ListItem>
            </Box>
          ))}
        </Typography>
        <Typography variant="h5">
          Your birthday: {formatBirthday(profile.birthday)}
        </Typography>
      </Box>
    </Box>
  );
}
