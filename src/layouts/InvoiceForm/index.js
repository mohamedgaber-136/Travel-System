import { Container } from '@mui/material'
import { InvoiceFormData } from 'components/InvoiceForm'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'

export const InvoiceForm = () => {
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <Container>
  <InvoiceFormData/>
    </Container>
  </DashboardLayout>  )
}
