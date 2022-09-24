import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import swal from "sweetalert";

import Box from "@mui/material/Box";

const ManageProduct = ({ item }) => {
   const { name, overview, img, price, _id } = item;

   const handleDelete = (id) => {
      swal({
         title: "Are you sure?",
         text: "Once cancelled, you will not be able to recover this selected file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            fetch(`https://backend-elegent-server.onrender.com/vehicles/${id}`, {
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
      // <Grid
      //    container
      //    spacing={{ xs: 2, md: 3 }}
      //    columns={{ xs: 4, sm: 8, md: 12 }}
      // >
      <Grid item xs={4} sm={4} md={4}>
         <Card
            sx={{ maxWidth: 345 }}
            style={{ padding: "20px", borderRadius: "10px" }}
         >
            <CardMedia
               component="img"
               width="100%"
               height="100%"
               image={img}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Name: {name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Overview: {overview?.slice(0, 150)}
               </Typography>
               <Typography
                  variant="h6"
                  component="div"
                  style={{ marginTop: "5px" }}
               >
                  Price: ${price}
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
                     onClick={() => handleDelete(_id)}
                     variant="contained"
                     size="small"
                  >
                     Delete
                  </Button>
               </Box>
            </CardActions>
         </Card>
      </Grid>
      // </Grid>
   );
};

export default ManageProduct;
