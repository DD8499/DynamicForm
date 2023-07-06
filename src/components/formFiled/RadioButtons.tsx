import { useField } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { InputLabel } from "@mui/material";

interface Option {
  value: string;
  label: string;
  selected?: boolean;
}

interface Props {
  label: string;
  name: string;
  options?: Option[];
  error: boolean | undefined;
  helperText: any;
}

const RadioButtons = (props: Props) => {
  const { label, name, error, helperText, options, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(event.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "30px" }}>
      <InputLabel
        style={{ display: "flex", alignItems: "center" }}
        htmlFor={name}
      >
        {label}
      </InputLabel>
      <FormControl error={error}>
        <RadioGroup {...field} id={name} onChange={handleChange} {...rest}>
          {options?.map((option: Option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        {error && <span>{helperText}</span>}
      </FormControl>
    </div>
  );
};

export default RadioButtons;
