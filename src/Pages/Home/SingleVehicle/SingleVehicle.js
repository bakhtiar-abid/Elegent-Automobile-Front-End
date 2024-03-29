import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navigation from "./../../Shared/Navigation/Navigation";
import OrderModal from "./../OrderModal/OrderModal";

const SingleVehicle = () => {
   const { Id } = useParams();
   const [openOrder, setopenOrder] = React.useState(false);
   const handleOrderOpen = () => setopenOrder(true);
   const handleOrderClose = () => setopenOrder(false);

   const [singleItem, setSingleItem] = useState([]);

   // const { name, price } = singleItem;

   useEffect(() => {
      fetch(`https://elegent-automobile-backend.vercel.app/vehicles/${Id}`)
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   });
   return (
      <Box>
         <Navigation></Navigation>
         <Typography
            sx={{ fontWeight: 500, m: 2, color: "secondary.main" }}
            variant="h6"
            component="div"
         >
            SEE YOUR ORDER DETAILS
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
         <Grid
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               marginTop: "50px",
            }}
            item
            xs={12}
            sm={12}
            md={12}
         >
            <Card
               sx={{ maxWidth: 345 }}
               style={{ padding: "20px", borderRadius: "10px" }}
            >
               <CardMedia
                  component="img"
                  width="100%"
                  height="100%"
                  image={singleItem?.img}
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Name: {singleItem?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Overview: {singleItem?.overview}
                  </Typography>
                  <Typography
                     variant="h6"
                     component="div"
                     style={{ marginTop: "5px" }}
                  >
                     Price: ${singleItem?.price}
                  </Typography>
               </CardContent>
               <CardActions
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                  }}
               >
                  <div>
                     <Button
                        variant="contained"
                        size="small"
                        onClick={handleOrderOpen}
                     >
                        Place Order
                     </Button>
                  </div>
               </CardActions>
            </Card>
         </Grid>
         <OrderModal
            openOrder={openOrder}
            handleOrderClose={handleOrderClose}
            singleItem={singleItem}
         ></OrderModal>
      </Box>
   );
};

export default SingleVehicle;
