import React from "react";
import { Field, ErrorMessage } from "formik";
import Grid from "@mui/material/Grid";
import { TextField, InputLabel, FormControl } from "@mui/material";
import "../../../App.css";

interface CustomInputProps {
  label?: string;
  name?: string;
  type?: string;
  error: boolean;
  helperText: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, name, type, error, helperText, ...rest } = props;
  return (
    <Grid>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <FormControl sx={{ m: 1, width: 300, mb: 2 }}>
        <Field
          as={TextField}
          id={name}
          name={name}
          type={type}
          {...rest}
          error={error}
          helperText={helperText}
        />
      </FormControl>
    </Grid>
  );
};

export default CustomInput;
