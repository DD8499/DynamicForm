import React from "react";
import Input from "./CustomInput";
import CheckboxGroup from "./CheckboxGroup";
import Textarea from "./TextArea";
import CustomSelect from "./Select";
import FileUpload from "./FileUpload";
import RadioButtons from "./RadioButtons";
import CustomCheckbox from "./Checkbox";

interface FormikControlProps {
  type: string;
  label: string;
  name: string;
  options?: any;
  defaultSelectedName?: any;
  error: boolean | undefined;
  helperText: any;
  // Other props...
}

const FormikControl: React.FC<FormikControlProps> = (props) => {
  switch (props?.type) {
    case "email":
      return <Input {...props} />;
    case "text":
      return <Input {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "select":
      return <CustomSelect {...props} />;
    case "fileupload":
      return <FileUpload {...props} />;
    case "radio":
      return <RadioButtons {...props} />;
    case "checkboxGroup":
      return <CheckboxGroup {...props} />;
    case "checkbox":
      return <CustomCheckbox {...props} />;
    default:
      return null;
  }
};

export default FormikControl;
