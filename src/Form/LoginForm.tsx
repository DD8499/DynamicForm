import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/form/formFiled/FormikControl";
import response from "../components/jsonData/formData.json";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
function LoginForm() {
  const initialValues: { [key: string]: any } = {};

  //  {
  //       "type": "radio",
  //       "name": "gender",
  //       "label": "Gender",
  //       "option": {
  //         "options": [
  //           { "label": "Male", "Value": "male", "checked": true },
  //           { "label": "FeMale", "Value": "female" }
  //         ]
  //       }
  //     }

  for (const item of response?.formField) {
    initialValues[item?.name] = item?.initValue;
    // if (item?.type === "select") {
    //   const initValue = item?.option?.options?.find(
    //     (option: any) => option?.selected
    //   );
    //   initialValues[item?.name] = initValue && initValue?.value;
    // }
    // if (item?.type === "radio") {
    //   console.log("first");
    // }
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

  return (
    <Paper
      sx={{
        margin: "auto",
        maxWidth: 800,
        padding: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh", // Optional: Set minimum height to fill the screen vertically
      }}
    >
      <Grid>
        <Typography>Login</Typography>
      </Grid>
      <Grid container justifyContent="center">
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
                    type={item?.type}
                    label={item?.label}
                    name={item?.name}
                    // options={item?.option?.options}
                    error={touched[item?.name] && !!errors[item?.name]}
                    helperText={touched[item?.name] && errors[item?.name]}
                  />
                ))}
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </Paper>
  );
}

export default LoginForm;
