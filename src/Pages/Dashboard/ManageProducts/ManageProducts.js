import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import swal from "sweetalert";

// import ManageProduct from "./../ManageProduct/ManageProduct";
// import Vehicles from "./../../Home/Vehicles/Vehicles";

const ManageProducts = () => {
   const [vehicles, setVehicles] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [control, setControl] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://obscure-refuge-59992.herokuapp.com/vehicles/")
         .then((res) => res.json())
         .then((data) => {
            setVehicles(data);
            setIsLoading(false);
         });
   }, [control]);
   const handleDelete = (id) => {
      swal({
         title: "Are you sure?",
         text: "Once cancelled, you will not be able to recover this selected file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            fetch(`https://obscure-refuge-59992.herokuapp.com/vehicles/${id}`, {
               method: "DELETE",
               headers: {
                  "content-type": "application/json",
               },
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount) {
                     setControl(!control);

                     swal("Poof! Your selected file has been cancelled", {
                        icon: "success",
                     });
                  } else {
                     setControl(false);
                  }
               });
         } else {
            swal("Your selected file is safe!");
         }
      });
   };
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
                  <Grid item xs={4} sm={4} md={4}>
                     <Card
                        sx={{ maxWidth: 345 }}
                        style={{ padding: "20px", borderRadius: "10px" }}
                     >
                        <CardMedia
                           component="img"
                           width="100%"
                           height="100%"
                           image={item?.img}
                           alt="green iguana"
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                           >
                              Name: {item?.name}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Overview: {item?.overview?.slice(0, 150)}
                           </Typography>
                           <Typography
                              variant="h6"
                              component="div"
                              style={{ marginTop: "5px" }}
                           >
                              Price: ${item?.price}
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
                              <Button
                                 onClick={() => handleDelete(item?._id)}
                                 variant="contained"
                                 size="small"
                              >
                                 Delete
                              </Button>
                           </Box>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default ManageProducts;
