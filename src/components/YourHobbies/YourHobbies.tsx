import { Box, Button, FormGroup, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector, useDispatch } from "react-redux";
import HobbyCheckbox from "./components/HobbyCheckbox";
import { setHobbies } from "../../redux/profile.slice";
import { hobbies } from "./utils/hobbies";
import { SetCurrentComponentType } from "../ProfileCreation.types";
import { RootState } from "../../redux/store";
import { Hobbies } from "../ProfileCreation.types";

export default function YourHobbies({
  setCurrentComponent,
}: {
  setCurrentComponent: SetCurrentComponentType;
}) {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const handleSubmit = () => {
    setCurrentComponent("yourBirthday");
  };

  const handleCheckboxChange = (value: string) => {
    const updatedHobbies = profile.hobbies.includes(value)
      ? profile.hobbies.filter((hobby: string) => hobby !== value)
      : [...profile.hobbies, value];
    dispatch(setHobbies(updatedHobbies));
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
        What are your hobbies, {profile.name}?
      </Typography>
      <Box sx={{ display: "flex", flexFlow: "column wrap" }}>
        <FormGroup>
          {hobbies.map((hobby: Hobbies) => (
            <HobbyCheckbox
              key={hobby.value}
              label={hobby.label}
              value={hobby.value}
              checked={profile.hobbies.includes(hobby.label)}
              onChange={handleCheckboxChange}
            />
          ))}
        </FormGroup>
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon />}
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
