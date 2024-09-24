import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import FromToDateRange from "components/FromToDateRange/FromToDateRange";
export const IndividualFormData = () => {
  // client name
  // identity number
  // phone number
  // another number
  // hotel name
  // from ... to "date"  count of nights
  // cost per night
  // count of person PAX
  // paid
  // rest of cost
  // notes  "text"  -- feature to choose transportation

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    national_id: Yup.number().required("national id is required"),
    phone_number: Yup.number().required("phone number is required"),
    alternative_phone_number: Yup.number().required(
      "alternative phone is required"
    ),
    hotel_name: Yup.string().required("hotel name is required"),
    from_date: Yup.string().required("from date is required"),
    to_date: Yup.string().required("to date is required"),
    cost_per_night: Yup.number().required("cost per night is required"),
    nights: Yup.number().required("Nights is required"),
    paid: Yup.number().required("Paid is required"),
    rest: Yup.number().required("rest cost is required"),
    count_PAX: Yup.number().required("Count is required"),
    notes: Yup.string(),
  });

  const initialValues = {
    name: "",
    national_id: "",
    phone_number: "",
    alternative_phone_number: "",
    hotel_name: "",
    from_date: "",
    to_date: "",
    cost_per_night: 0,
    nights: 0,
    paid: "",
    rest: 0,
    count_PAX: 0,
    notes: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, "test");
        setSubmitting(false); // To indicate form submission is done
      }}
    >
      {({ isSubmitting, errors, setFieldValue }) => (
        <Form>
          {console.log(errors, "errors")}
          <Paper
            sx={{
              padding: "50px",
              borderRadius: "20px",
            }}
          >
            <Grid
              container
              alignItems={"stretch"}
              gap={"10px"}
              justifyContent={"center"}
            >
              {/* Name Field */}

              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="name"
                  label="Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="name" component="div" className="error" />
              </Grid>
              {/* tel Field */}
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
                  component="div"
                  className="error"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="alternative_phone_number"
                  label="Alternative Phone"
                  variant="outlined"
                  name="alternative_phone_number"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="alternative_phone_number"
                  component="div"
                  className="error"
                />
              </Grid>

              {/* NationalID Field */}

              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="national_id"
                  label="National-Id"
                  variant="outlined"
                  name="national_id"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="national_id"
                  component="div"
                  className="error"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="hotel_name"
                  label="Hotel"
                  variant="outlined"
                  name="hotel_name"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="hotel_name"
                  component="div"
                  className="error"
                />
              </Grid>

              {/* From-To Date Range */}
              <Grid item xs={12} md={3}>
                <FromToDateRange
                  setDateRange={(fromDate, toDate) => {
                    setFieldValue("from_date", fromDate);
                    setFieldValue("to_date", toDate);
                  }}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="count_PAX"
                  label="Count"
                  variant="outlined"
                  name="count_PAX"
                  type="text"
                  fullWidth
                />
                <ErrorMessage
                  name="count_PAX"
                  component="div"
                  className="error"
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
                <ErrorMessage name="paid" component="div" className="error" />
              </Grid>

              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="Rest"
                  label="rest"
                  variant="outlined"
                  name="rest"
                  type="text"
                  disabled
                  readonly
                  fullWidth
                />
                <ErrorMessage name="rest" component="div" className="error" />
              </Grid>
              <Grid item xs={12} md={9}>
                <Field
                  as={TextField}
                  id="notes"
                  label="Notes"
                  variant="outlined"
                  name="notes"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="notes" component="div" className="error" />
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
