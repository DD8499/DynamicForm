import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
} from "@mui/material";

interface Props {
  label: string | undefined;
  name: string | undefined;
  options?: any;
  Defaultselectedname?: any;
  error: boolean;
  helperText: string;
}

const CustomSelect = (props: Props) => {
  const {
    label,
    name,
    options,
    Defaultselectedname,
    error,
    helperText,
    ...rest
  } = props;
  return (
    <Grid>
      <InputLabel>{label}</InputLabel>
      <FormControl sx={{ m: 1, width: 300, mb: 2 }}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Field
          as={Select}
          label={label}
          id={name}
          name={name}
          {...rest}
          error={error}
        >
          {options?.map((item: any, index: number) => (
            <MenuItem key={index} value={item?.value}>
              {item?.label}
            </MenuItem>
          ))}
        </Field>
        {helperText && <FormHelperText error>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default CustomSelect;
