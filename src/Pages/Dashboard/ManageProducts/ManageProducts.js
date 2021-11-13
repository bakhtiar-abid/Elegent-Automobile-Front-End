import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import ManageProduct from "./../ManageProduct/ManageProduct";

const ManageProducts = () => {
   const [vehicles, setVehicles] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://obscure-refuge-59992.herokuapp.com/vehicles/")
         .then((res) => res.json())
         .then((data) => {
            setVehicles(data);
            setIsLoading(false);
         });
   }, []);
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Container>
            <Typography
               sx={{ fontWeight: 500, m: 5 }}
               variant="h4"
               component="div"
            >
               See All Vehicles
            </Typography>
            {isLoading ? (
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     marginTop: "50px",
                  }}
               >
                  <CircularProgress />
               </Box>
            ) : (
               ""
            )}
            <Grid
               container
               spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 4, sm: 8, md: 12 }}
            >
               {vehicles?.map((item) => (
                  <ManageProduct key={item._id} item={item}></ManageProduct>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default ManageProducts;
