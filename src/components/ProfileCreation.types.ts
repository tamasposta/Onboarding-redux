export type Hobbies = {
  label: string;
  value: string;
};

export type HobbyCheckboxProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export type SetCurrentComponentType = React.Dispatch<
  React.SetStateAction<string>
>;
