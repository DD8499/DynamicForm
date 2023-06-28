import { Field } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

interface Option {
  value: string;
  label: string;
  checked?: boolean;
}

interface Props {
  label: string;
  name: string;
  options?: any;
  defaultSelectedName?: string;
  error: boolean;
  helperText: string;
}

const RadioButtons = (props: Props) => {
  console.log("inside");
  const {
    label,
    name,
    error,
    helperText,
    options,
    defaultSelectedName,
    ...rest
  } = props;
  console.log(options, "options");
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field
        name={name}
        as={RadioGroup}
        id={name}
        error={error}
        helperText={helperText}
        {...rest}
      >
        {options?.map((option: Option) => (
          <Grid key={option.value}>
            <FormControlLabel
              value={option.value}
              checked={option.checked}
              control={<Radio />}
              label={option.label}
              {...rest}
            />
          </Grid>
        ))}
      </Field>
    </div>
  );
};

export default RadioButtons;
