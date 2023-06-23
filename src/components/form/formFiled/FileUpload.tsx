import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

type Props = {
  label: string | undefined;
  name: string | undefined;
  //   setFieldValue: any;
};

function FileUpload(props: Props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <input
        {...rest}
        name={name}
        type="file"
        onChange={(event) => {
          //   props?.setFieldValue("file1", event?.currentTarget?.files[0]);
        }}
      />
      <label>{label}</label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default FileUpload;
