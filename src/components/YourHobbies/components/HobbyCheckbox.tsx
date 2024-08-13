import { Checkbox, FormControlLabel } from "@mui/material";
import { HobbyCheckboxProps } from "../YourHobbies.types";

const HobbyCheckbox: React.FC<HobbyCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(label);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default HobbyCheckbox;
