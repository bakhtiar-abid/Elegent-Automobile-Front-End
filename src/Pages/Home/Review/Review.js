import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const Review = ({ review }) => {
   const { customerName, email, description, rating } = review;
   return (
      <Grid item xs={4} sm={4} md={4}>
         <Card
            sx={{ maxWidth: 345 }}
            style={{ padding: "20px", borderRadius: "10px" }}
         >
            {/* <CardMedia
               component="img"
               width="100%"
               height="100%"
               image={img}
               alt="green iguana"
            /> */}
            <CardContent>
               <Typography gutterBottom variant="h6" component="div">
                  Name: {customerName}
               </Typography>
               <Typography gutterBottom variant="h6" component="div">
                  Email: {email}
               </Typography>
               <Typography variant="body2" color="text.primary">
                  Description: {description}
               </Typography>
               <Rating name="read-only" value={rating} readOnly />
            </CardContent>
            <CardActions
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            ></CardActions>
         </Card>
      </Grid>
   );
};

export default Review;
