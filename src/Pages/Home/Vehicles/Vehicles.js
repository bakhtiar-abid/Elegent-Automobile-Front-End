import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import Vehicle from "./../Vehicle/Vehicle";

const Vehicles = () => {
   const [vehicles, setVehicles] = useState([]);

   useEffect(() => {
      fetch("https://obscure-refuge-59992.herokuapp.com/orders")
         .then((res) => res.json())
         .then((data) => setVehicles(data));
   }, []);
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Container>
            <Typography
               sx={{ fontWeight: 500, m: 2, color: "success.main" }}
               variant="h6"
               component="div"
            >
               FEATURED VEHICLES
            </Typography>
            <Typography
               sx={{ fontWeight: 500, m: 5 }}
               variant="h4"
               component="div"
            >
               See What's Popular
            </Typography>
            <Grid
               container
               spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 4, sm: 8, md: 12 }}
            >
               {vehicles?.slice(0, 6).map((item) => (
                  <Vehicle key={item._id} item={item}></Vehicle>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default Vehicles;
