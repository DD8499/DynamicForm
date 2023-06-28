import React from "react";
import { Field } from "formik";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import Grid from "@mui/material/Grid";

interface Props {
  label: string;
  name: string;
  error: boolean;
  helperText: string;
}

const CustomCheckbox: React.FC<Props> = (props) => {
  const { label, name, error, helperText, ...rest } = props;

  return (
    <Grid item xs={12}>
      <FormControl error={error} component="fieldset">
        <FormControlLabel
          control={
            <Field
              as={Checkbox}
              name={name}
              id={name}
              color="primary"
              {...rest}
            />
          }
          label={label}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default CustomCheckbox;
