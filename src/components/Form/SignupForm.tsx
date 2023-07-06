import { Button, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import FormikControl from "../formFiled/FormikControl";
import response from "../jsonData/fakeData.json";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const initialValues: { [key: string]: any } = {};

  for (const item of response?.formField) {
    initialValues[item?.name] = item?.initValue;
    if (item?.type === "select" || item?.type === "radio") {
      item?.option?.options?.forEach((option) => {
        let selectItem;
        if (option?.selected) {
          selectItem = option;
          initialValues[item?.name] = selectItem && selectItem?.value;
        }
      });
    }
  }

  const validation: { [key: string]: any } = {};

  for (const item of response?.formField) {
    // initialValues[item?.name] = item?.initValue;
    validation[item?.name] = Yup.string().required("Required Field");
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
        gap: "30px",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        gap="30px"
        marginTop="10px"
      >
        <Typography display="flex" alignItems="center">
          Already have a account ?
        </Typography>
        <Button onClick={() => navigate("/login")} variant="contained">
          Login
        </Button>
      </Grid>
      <Grid>
        <Typography fontSize="50px">Signup</Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              {response?.formField?.map((item, index) => {
                return (
                  <FormikControl
                    key={index}
                    type={item?.type}
                    label={item?.label}
                    name={item?.name}
                    options={item?.option?.options}
                    error={touched[item?.name] && !!errors[item?.name]}
                    helperText={touched[item?.name] && errors[item?.name]}
                  />
                );
              })}
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Paper>
  );
};

export default SignupForm;
