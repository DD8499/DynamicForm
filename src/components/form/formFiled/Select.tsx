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

interface Option {
  value: string;
  label: string;
  selected?: boolean;
}

interface Props {
  label: string;
  name: string;
  options?: Option[];
  error: boolean;
  helperText: string;
}

const CustomSelect: React.FC<Props> = (props) => {
  const { label, name, options, error, helperText, ...rest } = props;
  return (
    <Grid item xs={12}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <FormControl sx={{ m: 1, width: 300, mb: 2 }} error={error}>
        <Field as={Select} id={name} name={name} {...rest}>
          {options?.map((item: Option, index: number) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Field>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default CustomSelect;
