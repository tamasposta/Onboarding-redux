import { Checkbox, FormControlLabel } from "@mui/material";
import { HobbyCheckboxProps } from "../../ProfileCreation.types";

const HobbyCheckbox: React.FC<HobbyCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleChange = () => {
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
