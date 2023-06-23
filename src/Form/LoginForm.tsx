import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/form/formFiled/FormikControl";
import response from "../components/jsonData/formData.json";
import Grid from "@mui/material/Grid";

function LoginForm() {
  const initialValues: { [key: string]: any } = {};

  for (const item of response?.formField) {
    console.log(item);
    initialValues[item?.name] = item?.initValue;
    if (item?.option) {
      const initValue = item?.option?.options?.find((item) => item?.selected);
      initialValues[item?.name] = initValue && initValue?.value;
    }
  }

  const validation: { [key: string]: any } = {};

  for (const item of response?.formField) {
    // initialValues[item?.name] = item?.initValue;
    validation[item?.name] = Yup.string().required("Required");
  }

  const validationSchema = Yup.object(validation);

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  console.log(initialValues, "initialValues");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors }: any) => {
        return (
          <Form>
            {response?.formField?.map((item, index) => (
              <FormikControl
                key={index}
                // control={control}
                type={item?.type}
                label={item?.label}
                name={item?.name}
                options={item?.option?.options}
                error={touched[item?.name] && !!errors[item?.name]}
                helperText={touched[item?.name] && errors[item?.name]}
              />
            ))}
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
