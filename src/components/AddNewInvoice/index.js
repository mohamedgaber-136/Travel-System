import React from 'react'
import { Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const AddNewInvoice = () => {
    const navigate =useNavigate()
  return (
    <Container className='d-flex justify-content-end'>
    <Button variant="dark" onClick={
        ()=>navigate('/NewInovice')
    } sx={{
      border:'1px solid'
    }}>Add New Invoice</Button>
  </Container>  )
}
