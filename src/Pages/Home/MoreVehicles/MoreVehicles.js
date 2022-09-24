import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./../../Shared/Navigation/Navigation";

const useStyle = makeStyles({
   vehicleHover: {
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
         transform: "scale(1.1)",
      },
   },
});

const MoreVehicles = () => {
   const { vehicleHover } = useStyle();
   const [isLoading, setIsLoading] = useState(false);
   const [moreVehicles, setmoreVehicles] = React.useState([]);
   console.log(moreVehicles);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://backend-elegent-server.onrender.com/vehicles/")
         .then((res) => res.json())
         .then((data) => {
            setmoreVehicles(data);
            setIsLoading(false);
         });
   }, []);

   return (
      <Box>
         <Navigation></Navigation>
         <Typography
            sx={{ fontWeight: 500, m: 2, color: "secondary.main" }}
            variant="h6"
            component="div"
         >
            EXPLORE MORE VEHICLES
         </Typography>
         <Box
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <div
               style={{ borderBottom: "4px solid orange", width: "10%" }}
            ></div>
         </Box>
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
            style={{ marginTop: "20px" }}
         >
            {moreVehicles?.map((moreVehicle) => {
               return (
                  <Grid
                     style={{
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                     item
                     xs={4}
                     sm={4}
                     md={4}
                     key={moreVehicle._id}
                  >
                     <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000"
                     >
                        <Card
                           sx={{ maxWidth: 345 }}
                           style={{
                              padding: "20px",
                              borderRadius: "10px",
                           }}
                        >
                           <CardMedia
                              className={vehicleHover}
                              component="img"
                              width="100%"
                              height="100%"
                              image={moreVehicle?.img}
                              alt="green iguana"
                           />
                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant="h5"
                                 component="div"
                              >
                                 Name: {moreVehicle?.name}
                              </Typography>
                              <Typography
                                 variant="body2"
                                 color="text.secondary"
                              >
                                 Overview: {moreVehicle?.overview.slice(0, 150)}
                              </Typography>
                              <Typography
                                 variant="h6"
                                 component="div"
                                 style={{ marginTop: "5px" }}
                              >
                                 Price: ${moreVehicle?.price}
                              </Typography>
                           </CardContent>
                           <CardActions
                              style={{
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                              }}
                           >
                              <Box>
                                 <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/vehicle/${moreVehicle?._id}`}
                                 >
                                    <Button variant="contained" size="small">
                                       Order By Now
                                    </Button>
                                 </Link>
                              </Box>
                           </CardActions>
                        </Card>
                     </div>
                  </Grid>
               );
            })}
         </Grid>
      </Box>
   );
};

export default MoreVehicles;
