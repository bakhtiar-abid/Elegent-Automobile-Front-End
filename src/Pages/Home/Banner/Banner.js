import React from "react";
import Grid from "@mui/material/Grid";

import bg from "../../../images/top-banner.png";
import { Typography, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";

const bannerBg = {
   background: `url(${bg})`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
};

const verticalCenter = {
   height: "100vh",
};

const Banner = () => {
   return (
      <Box style={bannerBg} sx={{ flexGrow: 1, position: "relative" }}>
         <Grid container spacing={2}>
            <Grid
               item
               style={{
                  ...verticalCenter,
                  textAlign: "center",
                  position: "absolute",
                  top: "53%",
                  left: "50%",
                  transform: " translate(-50%, -50%)",
                  color: "white",
                  padding: "30px",
                  borderRadius: "20px",
               }}
               xs={12}
               md={6}
            >
               <Box>
                  <Typography
                     style={{
                        color: "white",
                        fontSize: "3rem",
                        fontWeight: "600",
                     }}
                     variant="h3"
                  >
                     ELEGENT AUTOMOBILE
                  </Typography>
                  <Typography
                     variant="h6"
                     sx={{
                        my: 3,
                        fontSize: "18px",
                        fontWeight: 200,
                        color: "whitesmoke",
                     }}
                  >
                     A safe and reliable way to get your car.
                  </Typography>
                  {/* <Button
                     variant="contained"
                     style={{ backgroundColor: "#5CE7ED" }}
                  >
                     Get Appointment
                  </Button> */}
               </Box>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter}>
               {/* <img style={{ width: "350px" }} src={chair} alt="" /> */}
            </Grid>
         </Grid>
      </Box>
   );
};

export default Banner;
