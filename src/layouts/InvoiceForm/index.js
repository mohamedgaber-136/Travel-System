import { Container } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BasicTabs from "components/InvoiceTabs/InvoiceTabs";

export const InvoiceForm = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container>
        <BasicTabs />
      </Container>
    </DashboardLayout>
  );
};
