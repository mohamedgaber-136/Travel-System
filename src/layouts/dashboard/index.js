/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// Dashboard components


function Dashboard() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
 icon="person_add"                title="Clients"
                count="2,300"
              
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="leaderboard"
                title="Total Amount"
                count="34k"
             
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="paidIcon"
                title="Profit"
                count="+91"        
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container  spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
               
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                      icon="flightIcon"
                    title="Dahab"
                    route='/tables/Dahab'
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                         icon="flightIcon"
                    title="Sharm el Sheikh"
                    route='/tables/Sharm-ElSheikh'

                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                         icon="flightIcon"
                    title="Hurghada"
                    route='/tables/Hurghada'

                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                        icon="flightIcon"
                    title="Marsa Allam"
                    route='/tables/Marsa-Allam'

                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                      icon="flightIcon"
                    title="Cairo One Day"
                    route='/tables/Cairo'

                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                      icon="flightIcon"
                    title="Day Use"
                    route='/tables/DayUse'

                  />
                </Grid>
             
              </Grid>
            </Grid>
         
          </Grid>
      
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
