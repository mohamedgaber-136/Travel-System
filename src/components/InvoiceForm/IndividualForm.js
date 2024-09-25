import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import FromToDateRange from "components/FromToDateRange/FromToDateRange";

export const IndividualFormData = () => {
  const [formValues, setFormValues] = useState({
    count_PAX: 0,
    cost_per_night: 0,
    nights: 0,
    paid: 0,
  })

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    national_id: Yup.number('Only numbers allowed').required("National ID is required"),
    phone_number: Yup.number('Only numbers allowed').required("Phone number is required"),
    alternative_phone_number: Yup.number('Only numbers allowed').required("Alternative phone number is required"),
    hotel_name: Yup.string().required("Hotel name is required"),
    from_date: Yup.string().required("From date is required"),
    to_date: Yup.string().required("To date is required"),
    cost_per_night: Yup.number().required("Cost per night is required"),
    nights: Yup.number().required("Nights is required"),
    paid: Yup.number().required("Paid amount is required"),
    rest: Yup.number().required("Rest amount is required"),
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
    nights: 1,
    paid: 0,
    rest: 0,
    count_PAX: 1,
    notes: "",
  };
  const calculateNights = (fromDate, toDate, setFieldValue) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffTime = Math.abs(to - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setFieldValue("nights", diffDays);
    setFormValues({
      ...formValues,
      nights: Number(diffDays)
    })
  };

  const calculateValues = (values, setFieldValue) => {
    const from = new Date(values.from_date);
    const to = new Date(values.to_date);
    const diffDays = Math.ceil(Math.abs(to - from) / (1000 * 60 * 60 * 24));

    const nights = diffDays > 0 ? diffDays : 0;
    const totalPrice = values.count_PAX * values.cost_per_night * nights;
    const restOfAmount = totalPrice - values.paid;

    setFieldValue("nights", nights);
    setFieldValue("rest", restOfAmount);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // const totalPrice = Number(values.count_PAX) * Number(values.cost_per_night) * Number(values.nights);
        // const restOfAmount = totalPrice - Number(values.paid);
        // values.rest = restOfAmount; // Update rest value in the form values
        console.log(values, "Submitted values");
        setSubmitting(false); // To indicate form submission is done
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => {

        // useEffect(() => {
        //   const totalPrice = formValues.count_PAX * formValues.cost_per_night * formValues.nights;
        //   const restOfAmount = totalPrice - formValues.paid;
        //   console.log('calculate rest', restOfAmount)
        //   setFieldValue("rest", restOfAmount); // Update the rest field
        // }, [formValues, setFieldValue]);

        useEffect(() => {
          calculateValues(values, setFieldValue);
        }, [values.from_date, values.to_date, values.cost_per_night, values.paid, values.count_PAX]);


        return <Form>
          <Typography component="h1">Invoice #1</Typography>
          <Paper sx={{ padding: "50px", borderRadius: "20px" }}>
            <Grid container alignItems={"stretch"} gap={"10px"} justifyContent={"center"}>
              {/* Name Field */}
              <Grid item xs={12} md={3}>
                <Field as={TextField} id="name" label="Client Name" variant="outlined" name="name" type="text" fullWidth />
                <ErrorMessage name="name" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Phone Number Fields */}
              <Grid item xs={12} md={3}>
                <Field as={TextField} id="phone_number" label="Phone Number" variant="outlined" name="phone_number" type="text" fullWidth />
                <ErrorMessage name="phone_number" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field as={TextField} id="alternative_phone_number" label="Other Phone" variant="outlined" name="alternative_phone_number" type="text" fullWidth />
                <ErrorMessage name="alternative_phone_number" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* National ID Field */}
              <Grid item xs={12} md={3}>
                <Field as={TextField} id="national_id" label="National ID" variant="outlined" name="national_id" type="text" fullWidth />
                <ErrorMessage name="national_id" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Hotel Name Field */}
              <Grid item xs={12} md={3}>
                <Field as={TextField} id="hotel_name" label="Hotel" variant="outlined" name="hotel_name" type="text" fullWidth />
                <ErrorMessage name="hotel_name" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* From-To Date Range */}
              <Grid item xs={12} md={3}>
                <FromToDateRange
                  setDateRange={(fromDate, toDate) => {
                    setFieldValue("from_date", fromDate);
                    setFieldValue("to_date", toDate);
                    // calculateNights(fromDate, toDate, setFieldValue);
                  }}
                />
              </Grid>

              {/* Count PAX Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="count_PAX"
                  label="Adults"
                  variant="outlined"
                  name="count_PAX"
                  type="text"
                  fullWidth
                  // onChange={(e) => {
                  //   setFieldValue("count_PAX", e.target.value);
                  //   // setFormValues({
                  //   //   ...formValues,
                  //   //   count_PAX: Number(e.target.value)
                  //   // })
                  // }}
                />
                <ErrorMessage name="count_PAX" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Nights Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="nights"
                  label="Nights"
                  variant="outlined"
                  name="nights"
                  type="text"
                  fullWidth
                  value={values.nights}
                  disabled
                  // onChange={(e) => {
                  //   setFormValues({
                  //     ...formValues,
                  //     nights: Number(e.target.value)
                  //   })
                  // }}
                />
                <ErrorMessage name="nights" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Cost Per Night Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="cost_per_night"
                  label="Cost per Night"
                  variant="outlined"
                  name="cost_per_night"
                  type="text"
                  fullWidth
                  // onChange={(e) => {
                  //   setFieldValue("cost_per_night", e.target.value);
                  //   setFormValues({
                  //     ...formValues,
                  //     cost_per_night: Number(e.target.value)
                  //   })
                  // }}
                />
                <ErrorMessage name="cost_per_night" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Paid Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="paid"
                  label="Paid"
                  variant="outlined"
                  name="paid"
                  type="text"
                  fullWidth
                  // onChange={(e) => {
                  //   setFieldValue("paid", e.target.value);
                  //   setFormValues({
                  //     ...formValues,
                  //     paid: Number(e.target.value)
                  //   })
                  // }}
                />
                <ErrorMessage name="paid" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Rest Field */}
              <Grid item xs={12} md={3}>
                <Field
                  as={TextField}
                  id="rest"
                  label="Rest"
                  variant="outlined"
                  name="rest"
                  type="text"
                  disabled
                  value={values.rest}
                  fullWidth
                />
                <ErrorMessage name="rest" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Notes Field */}
              <Grid item xs={12}>
                <Field as={TextField} id="notes" label="Notes" variant="outlined" name="notes" multiline rows={4} fullWidth />
                <ErrorMessage name="notes" component={({ children }) => <Typography variant="body2" color="error" sx={{ fontSize: "0.875rem" }}>{children}</Typography>} />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                <Button type="submit" variant="dark" sx={{
                  border: '1px solid'
                }} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      }}
    </Formik>
  );
};

export default IndividualFormData;
