import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
   vehicleHover: {
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
         transform: "scale(1.1)",
      },
   },
});

const Vehicle = ({ item }) => {
   const { vehicleHover } = useStyle();
   const { name, overview, img, price, _id } = item;
   return (
      <Grid item xs={4} sm={4} md={4}>
         <Card
            sx={{ maxWidth: 345 }}
            style={{ padding: "20px", borderRadius: "10px" }}
         >
            <CardMedia
               className={vehicleHover}
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
                  Overview: {overview.slice(0, 150)}
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
               <Button variant="contained" size="small">
                  Purchase
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
};

export default Vehicle;

//  <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
//     <CardMedia
//        className={vehicleHover}
//        component="img"
//        style={{ width: "auto", height: "150px", margin: "0 auto" }}
//        image={img}
//        alt="green iguana"
//     />
//     <CardContent>
//        <Typography variant="h6" component="div">
//           Name: {name}
//        </Typography>
//        <Typography variant="body2" color="text.secondary">
//           Overview: {overview.slice(0, 150)}...
//        </Typography>
//        <Typography variant="h6" component="div">
//           Price: ${price}
//        </Typography>
//     </CardContent>
//  </Card>;
