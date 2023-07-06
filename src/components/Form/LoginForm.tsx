import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../formFiled/FormikControl";
import response from "../jsonData/formData.json";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const initialValues: { [key: string]: any } = {};

  for (const item of response?.formField) {
    initialValues[item?.name] = item?.initValue;
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
  const navigate = useNavigate();

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
        minHeight: "100vh",
        gap: "50px",
      }}
    >
      <Grid container display="flex" justifyContent="center" gap="30px">
        <Typography display="flex" alignItems="center">
          Don't have a account ?
        </Typography>
        <Button onClick={() => navigate("/sign-up")} variant="contained">
          Signup
        </Button>
      </Grid>
      <Grid>
        <Typography fontSize="50px">Login</Typography>
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
