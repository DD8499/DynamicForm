import { Field } from "formik";
import { FormControl, Grid, InputLabel, TextField } from "@mui/material";

interface Props {
  label: string | undefined;
  name: string | undefined;
  error: boolean | undefined;
  helperText: string | undefined;
}

const Textarea = (props: Props) => {
  const { label, name, error, helperText, ...rest } = props;
  return (
    <Grid>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <FormControl sx={{ m: 1, width: 300, mb: 2 }}>
        <Field
          as={TextField}
          id={name}
          name={name}
          multiline
          {...rest}
          row={10}
          error={error}
          helperText={helperText}
          fullWidth
        />
      </FormControl>
    </Grid>
  );
};

export default Textarea;
