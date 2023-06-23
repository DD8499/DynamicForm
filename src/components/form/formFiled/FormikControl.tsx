import React from "react";
import Input from "./CustomInput";
import CheckboxGroup from "./CheckboxGroup";
import Textarea from "./TextArea";
import CustomSelect from "./Select";
import FileUpload from "./FileUpload";
import RadioButtons from "./RadioButtons";
import CustomCheckbox from "./Checkbox";

interface FormikControlProps {
  type: string | undefined;
  label: string | undefined;
  name: string | undefined;
  options?: any;
  Defaultselectedname?: any;
  error: boolean;
  helperText: string;
  // Other props...
}

const FormikControl: React.FC<FormikControlProps> = (props) => {
  const { type, ...rest } = props;

  switch (type) {
    case "email":
    case "text":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <CustomSelect {...rest} />;
    case "fileupload":
      return <FileUpload {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkboxGroup":
      return <CheckboxGroup {...rest} />;
    case "checkbox":
      return <CustomCheckbox {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
