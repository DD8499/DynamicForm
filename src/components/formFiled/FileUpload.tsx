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
        onChange={() => {
          // props?.setFieldValue("file1", event?.currentTarget?.files[0]);
        }}
      />
      <label>{label}</label>
    </div>
  );
}

export default FileUpload;
