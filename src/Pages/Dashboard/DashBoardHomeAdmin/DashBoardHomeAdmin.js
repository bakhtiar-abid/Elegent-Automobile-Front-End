import * as React from "react";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const DashBoardHomeAdmin = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "warning.main", color: "white" }}
               variant="h5"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/manageAllOrders"
                  >
                     <h2 style={{ color: "white" }}>Manage All Orders</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "primary.main", color: "white" }}
               variant="h5"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/addproduct"
                  >
                     <h2 style={{ color: "white" }}>Add A Product</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "secondary.main", color: "white" }}
               variant="h5"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/makeAdmin"
                  >
                     <h2 style={{ color: "white" }}>Make Admin</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
         <Grid item xs={12} md={6} sm={12}>
            <Typography
               sx={{ bgcolor: "success.light", color: "white" }}
               variant="h5"
               component="div"
               gutterBottom
               padding="6rem"
            >
               <Box>
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/dashboard/manageProducts"
                  >
                     <h2 style={{ color: "white" }}>Manage Products</h2>
                  </Link>
               </Box>
            </Typography>
         </Grid>
      </Grid>
   );
};

export default DashBoardHomeAdmin;
