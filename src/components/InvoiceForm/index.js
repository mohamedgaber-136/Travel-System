import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { TripDropDown } from "components/TripDropDown";
export const InvoiceFormData = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    tel: Yup.number().required("Telephone is required"),
    nights: Yup.number().required("Nights is required"),
    count: Yup.number().required("Count is required"),
    paid: Yup.number().required("Paid is required"),
    hotel: Yup.string().required("hotel is required"),
    NationalId: Yup.number().required("NationalId is required"),
  });
  const initialValues = {
    name: "",
    NationalId: "",
    tel: "",
    nights:'',
    paid:'',
    hotel:'',
    rest:'',
    count:'',
    hotel:''
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false); // To indicate form submission is done
      }}
    >
      {({ isSubmitting }) => (
        <Form>
                       <Grid item xs={12} md={12} marginBlock={'20px'}>
           <TripDropDown/>
            </Grid>    
            <Paper sx={{
                padding:"50px",
                borderRadius:'20px'
                
            }}>
       
          <Grid container gap={"10px"} justifyContent={"center"}>
            {/* Name Field */}
      
            <Grid item xs={12} md={3}>
              <TextField
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
              <TextField
                id="tel"
                label="Telephone"
                variant="outlined"
                name="tel"
                type="text"
                fullWidth
              />
              <ErrorMessage name="tel" component="div" className="error" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="hotel"
                label="Hotel"
                variant="outlined"
                name="hotel"
                type="text"
                fullWidth
              />
              <ErrorMessage name="hotel" component="div" className="error" />
            </Grid>

            {/* NationalID Field */}

            <Grid item xs={12} md={3}>
              <TextField
                id="NationalId"
                label="National-Id"
                variant="outlined"
                name="NationalId"
                type="text"
                fullWidth
              />
              <ErrorMessage
                name="NationalId"
                component="div"
                className="error"
              />
            </Grid>
        
         
            <Grid item xs={12} md={3} >
              <TextField
                id="paid"
                label="Paid"
                variant="outlined"
                name="paid"
                type="text"
                fullWidth
              />
              <ErrorMessage
                name="paid"
                component="div"
                className="error"
              />
            </Grid>
            <Grid item xs={12} md={3} >
              <TextField
                id="count"
                label="Count"
                variant="outlined"
                name="count"
                type="text"
                fullWidth
              />
              <ErrorMessage
                name="count"
                component="div"
                className="error"
              />
            </Grid>
            <Grid item xs={12} md={3} >
              <TextField
                id="Rest"
                label="rest"
                variant="outlined"
                name="rest"
                type="text"
                disabled
                readonly
                fullWidth
              />
              <ErrorMessage
                name="rest"
                component="div"
                className="error"
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <TextField
                id="note"
                label="Notes"
                variant="outlined"
                name="note"
                type="text"
                fullWidth
              />
              <ErrorMessage
                name="note"
                component="div"
                className="error"
              />
            </Grid>
          
          </Grid>
          {/* Submit Button */}
          <Container 
          sx={{
            display:'flex',
justifyContent:'center'
          }}
          >

          <Button variant='dark' type='submit' 
          sx={{
              border:'1px solid black',
              margin:'20px 0 0 0'
            }}
            >Done</Button>
            </Container>
          </Paper>

        </Form>
      )}
    </Formik>
  );
};
