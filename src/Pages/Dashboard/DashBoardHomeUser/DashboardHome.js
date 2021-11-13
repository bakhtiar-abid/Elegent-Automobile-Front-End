import * as React from "react";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const DashboardHome = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "warning.main", color: "white" }}
               variant="h4"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/myorders"
                  >
                     <h2 style={{ color: "white" }}>My Orders</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "primary.main", color: "white" }}
               variant="h4"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link style={{ textDecoration: "none" }} to="/dashboard/pay">
                     <h2 style={{ color: "white" }}>Payment</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
         <Grid item xs={12} md={12} sm={12}>
            <Typography
               sx={{ bgcolor: "success.light", color: "white" }}
               variant="h4"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/review"
                  >
                     <h2 style={{ color: "white" }}>Review</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
      </Grid>
   );
};

export default DashboardHome;
