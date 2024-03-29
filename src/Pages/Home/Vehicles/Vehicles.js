import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Vehicle from "./../Vehicle/Vehicle";

const Vehicles = () => {
   const [vehicles, setVehicles] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://elegent-automobile-backend.vercel.app/vehicles/")
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
               sx={{ fontWeight: 500, m: 2, color: "info.light" }}
               variant="h6"
               component="div"
            >
               FEATURED VEHICLES
            </Typography>
            <Box
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <div
                  style={{ borderBottom: "4px solid red", width: "9%" }}
               ></div>
            </Box>
            <Typography
               sx={{ fontWeight: 500, m: 5 }}
               variant="h4"
               component="div"
            >
               See What's Popular
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
               {vehicles?.slice(0, 6).map((item) => (
                  <Vehicle key={item._id} item={item}></Vehicle>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default Vehicles;
