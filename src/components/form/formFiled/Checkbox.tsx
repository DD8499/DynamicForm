import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Checkbox from "@mui/material/Checkbox";
interface Props {
  label: string | undefined;
  name: string | undefined;
}

const CustomCheckbox = (props: Props) => {
  const { label, name, ...rest } = props;
  return (
    // <Checkbox />
    <div className="form-control">
      <label>
        <Field as={Checkbox} name={name} {...rest} />
        {label}
      </label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default CustomCheckbox;
