import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import swal from "sweetalert";
import useAuth from "./../../../hooks/useAuth";
const Review = () => {
   const [value, setValue] = React.useState(2);
   const { user } = useAuth();
   const initialInfo = {
      customerName: user?.displayName,
      email: user?.email,
   };
   const [reviewInfo, setreviewInfo] = useState(initialInfo);

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...reviewInfo };
      newInfo[field] = value;
      setreviewInfo(newInfo);
   };

   const handleReviewSubmit = (e) => {
      // collect data
      const reviewData = {
         ...reviewInfo,
         rating: value,
      };
      console.log(reviewData);
      // send to the server
      fetch("https://obscure-refuge-59992.herokuapp.com/review", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(reviewData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               swal(
                  "Reviewed!",
                  "You have sucessfully reviewed your item!",
                  "success"
               );
               setreviewInfo({});
            }
         });

      e.preventDefault();
   };

   return (
      <Box>
         <form onSubmit={handleReviewSubmit}>
            <p>
               Name:
               <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="customerName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  size="small"
               />
            </p>
            <p>
               Email:
               <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user?.email}
                  size="small"
               />
            </p>
            <p>
               Review Description:
               <br />
               <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue=""
                  onBlur={handleOnBlur}
                  name="description"
                  placeholder="Write your review here"
                  style={{ width: "90%", height: "100px" }}
                  required
               />
            </p>

            <br />
            <p>Give Your Rating:</p>
            <Rating
               name="rating"
               value={value}
               onChange={(event, newValue) => {
                  setValue(newValue);
               }}
            />
            <br />
            <Button type="submit" variant="contained">
               Submit
            </Button>
         </form>
      </Box>
   );
};

export default Review;
