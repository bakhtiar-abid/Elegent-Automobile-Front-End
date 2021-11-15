import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import volvo from "../../../images/volvo.png";

const VolvoCar = () => {
   return (
      <Box
         style={{
            backgroundColor: "#111111",
            padding: "20px",
            margin: "50px 0",
         }}
      >
         <Container sx={{ my: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                     <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="3000"
                     >
                        <img style={{ width: "100%" }} src={volvo} alt="" />
                     </div>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={4}
                     style={{
                        display: "flex",
                        textAlign: "left",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <div
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-center"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="3000"
                     >
                        >
                        <Box>
                           <Typography
                              variant="h3"
                              style={{ fontWeight: 500, color: "white" }}
                              component="div"
                              sx={{ mt: 5 }}
                           >
                              Safe. Relaxing. Good to ride in. Subtly decorated.
                           </Typography>
                           <Typography
                              variant="body1"
                              component="div"
                              sx={{ my: 5 }}
                              color="text.secondary"
                              style={{ color: "white" }}
                           >
                              The Volvo XC60 sits right at the heart of the
                              big-selling mid-size crossover crowd. It’s
                              handsome and luxurious and it wraps you in a
                              safety blanket as comprehensive as the Swedish
                              welfare state.It’s not distracted by off-road
                              ambitions. Neither is it wearing the pretence of
                              track-lapping athleticism.
                           </Typography>
                        </Box>
                     </div>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </Box>
   );
};

export default VolvoCar;
