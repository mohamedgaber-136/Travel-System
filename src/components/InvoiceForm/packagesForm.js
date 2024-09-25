import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { TripDropDown } from "components/TripDropDown";

export const PackagesForm = () => {
  const [selectedTripValue, setSelectedTripValue] = useState(null); // State to store the selected trip
const [count,setCount] = useState(1)
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    national_id: Yup.number().required("NationalId is required"),
    phone_number: Yup.number().required("Telephone is required"),
    alternative_phone_number: Yup.number().required("Telephone is required"),
    nights: Yup.number().required("Nights is required"),
    count: Yup.number().required("Count is required"),
    paid: Yup.number().required("Paid is required"),
    hotel: Yup.string().required("hotel is required"),
  });
  const initialValues = {
    name: "",
    national_id: "",
    phone_number: "",
    alternative_phone_number: "",
    person_cost: "",
    total_cost: "",
    count: "",
    paid: "",
    rest: "",
    notes: "",
  };
useEffect(()=>{
  const total_Cost= selectedTripValue * count
  console.log(total_Cost)
},[selectedTripValue,count])
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false); // To indicate form submission is done
      }}
    >
      {({ isSubmitting, setFieldValue }) => ( // Destructure setFieldValue here
        <Form>
          <Typography component="h1">Invoice #1</Typography>

          <Grid item xs={12} md={12} marginBlock={"20px"}>
            <TripDropDown setFieldValue={setFieldValue} setSelectedTrip={setSelectedTripValue} />
          </Grid>
          <Paper
            sx={{
              padding: "50px",
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={2} justifyContent={"center"}>
              {/* Name Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="name"
                  label="Client Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="name"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="national_id"
                  label="National Id"
                  variant="outlined"
                  name="national_id"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="national_id"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="phone_number"
                  label="Phone Number"
                  variant="outlined"
                  name="phone_number"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="phone_number"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="alternative_phone_number"
                  label="Other Phone"
                  variant="outlined"
                  name="alternative_phone_number"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="alternative_phone_number"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="person_cost"
                  label="Person Cost"
                  disabled
                  variant="outlined"
                  name="person_cost"
                  type="text"
                  fullWidth
                  onChange={() => {
                    setFieldValue("person_cost", selectedTrip?.value);
                  }}
                />
                <ErrorMessage
                  name="person_cost"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="count"
                  label="Count "
                  variant="outlined"
                  name="count"
                  type="text"
                  fullWidth
                  onChange={(e)=>{
                    setCount(e.target.value);
                  }}
                />
                <ErrorMessage
                  name="count"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="total_cost"
                  label="Total Cost "
                  variant="outlined"
                  name="total_cost"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="total_cost"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
           
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="paid"
                  label="Paid"
                  variant="outlined"
                  name="paid"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="paid"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  id="rest"
                  label="Rest"
                  variant="outlined"
                  name="rest"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="rest"
                  component={({ children }) => (
                    <Typography
                      variant="body2"
                      color="error"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {children}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  id="note"
                  label="Notes"
                  variant="outlined"
                  name="note"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="note" component="div" className="error" />
              </Grid>
            </Grid>
            {/* Submit Button */}
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="dark"
                type="submit"
                sx={{
                  border: "1px solid black",
                  margin: "20px 0 0 0",
                }}
              >
                Done
              </Button>
            </Container>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};
