import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SingleVehicle = () => {
   const { Id } = useParams();

   const [singleItem, setSingleItem] = useState([]);

   useEffect(() => {
      fetch(`https://obscure-refuge-59992.herokuapp.com/orders/${Id}`)
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   });
   return (
      <Grid item xs={4} sm={4} md={4}>
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
               <Button variant="contained" size="small">
                  Purchase
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
};

export default SingleVehicle;
