import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Review from "./../Review/Review";

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://elegent-automobile-backend.vercel.app/review/")
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
               sx={{ fontWeight: 500, marginBottom: 2, color: "info.light" }}
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
            {/* <Typography
               sx={{ fontWeight: 500, m: 5 }}
               variant="h4"
               component="div"
            >
               See Your Own Reviews
            </Typography> */}
            {isLoading ? (
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     marginTop: "10px",
                  }}
               >
                  <CircularProgress />
               </Box>
            ) : (
               ""
            )}
            <div
               data-aos="fade-up"
               data-aos-anchor-placement="top-center"
               data-aos-easing="ease-in-out"
               data-aos-duration="2000"
            >
               <Box
                  sx={{ flexGrow: 1 }}
                  sx={{ display: "flex", marginTop: "25px" }}
               >
                  <Grid container spacing={2}>
                     <Grid xs={12} md={4} item>
                        <Card
                           sx={{
                              minWidth: 275,
                           }}
                        >
                           <Box style={{ textAlign: "center" }}>
                              <CardContent>
                                 <Box>
                                    <img
                                       width="50%"
                                       src="https://bakhtiarabid.github.io/leader-board-HTML-CSS/images/players/player-1.png"
                                       loading="lazy"
                                    />
                                 </Box>
                                 <Box>
                                    <Typography
                                       style={{ color: "#565E9C" }}
                                       variant="h6"
                                    >
                                       Winson Herry
                                    </Typography>
                                    <Typography
                                       style={{ color: "gray" }}
                                       variant="p"
                                       color="text.secondary"
                                    >
                                       California
                                    </Typography>
                                 </Box>
                                 <Typography
                                    sx={{
                                       fontSize: 14,
                                       textAlign: "center",
                                       marginTop: "10px",
                                       padding: "10px",
                                    }}
                                    color="text.secondary"
                                    gutterBottom
                                 >
                                    It is a long established fact that by the
                                    readable content of a layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                 </Typography>
                                 <Rating name="read-only" value={4} readOnly />
                              </CardContent>
                           </Box>
                        </Card>
                     </Grid>
                     <Grid xs={12} md={4} sm={12} item>
                        <Card
                           sx={{
                              minWidth: 275,
                           }}
                        >
                           <Box style={{ textAlign: "center" }}>
                              <CardContent>
                                 <Box>
                                    <img
                                       width="50%"
                                       src="https://bakhtiarabid.github.io/leader-board-HTML-CSS/images/players/player-3.png"
                                       loading="lazy"
                                    />
                                 </Box>
                                 <Box>
                                    <Typography
                                       style={{ color: "#565E9C" }}
                                       variant="h6"
                                    >
                                       Alexra Melen
                                    </Typography>
                                    <Typography
                                       style={{ color: "gray" }}
                                       variant="p"
                                       color="text.secondary"
                                    >
                                       Australia
                                    </Typography>
                                 </Box>
                                 <Typography
                                    sx={{
                                       fontSize: 14,
                                       textAlign: "center",
                                       marginTop: "10px",
                                       padding: "10px",
                                    }}
                                    color="text.secondary"
                                    gutterBottom
                                 >
                                    It is a long established fact that by the
                                    readable content of a layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                 </Typography>
                                 <Rating name="read-only" value={5} readOnly />
                              </CardContent>
                           </Box>
                        </Card>
                     </Grid>
                     <Grid xs={12} md={4} item>
                        <Card
                           sx={{
                              minWidth: 275,
                           }}
                        >
                           <Box style={{ textAlign: "center" }}>
                              <CardContent>
                                 <Box>
                                    <img
                                       width="50%"
                                       src=" https://bakhtiarabid.github.io/leader-board-HTML-CSS/images/players/player-5.png"
                                       loading="lazy"
                                    />
                                 </Box>
                                 <Box>
                                    <Typography
                                       style={{ color: "#565E9C" }}
                                       variant="h6"
                                    >
                                       Robert Dominguez
                                    </Typography>
                                    <Typography
                                       style={{ color: "gray" }}
                                       variant="p"
                                       color="text.secondary"
                                    >
                                       Canada
                                    </Typography>
                                 </Box>
                                 <Typography
                                    sx={{
                                       fontSize: 14,
                                       textAlign: "center",
                                       marginTop: "10px",
                                       padding: "10px",
                                    }}
                                    color="text.secondary"
                                    gutterBottom
                                 >
                                    It is a long established fact that by the
                                    readable content of a layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                 </Typography>
                                 <Rating name="read-only" value={3} readOnly />
                              </CardContent>
                           </Box>
                        </Card>
                     </Grid>
                  </Grid>
               </Box>
            </div>
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
