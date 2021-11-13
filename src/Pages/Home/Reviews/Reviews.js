import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Review from "./../Review/Review";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://obscure-refuge-59992.herokuapp.com/review/")
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
            setIsLoading(false);
         });
   }, []);

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Typography
               sx={{ fontWeight: 500, m: 2, color: "info.light" }}
               variant="h6"
               component="div"
            >
               FEATURED REVIEWS
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
               See Your Own Reviews
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
               {reviews?.map((review) => (
                  <Review key={review?._id} review={review}></Review>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default Reviews;
