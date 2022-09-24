import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import swal from "sweetalert";

const AddAVehicle = () => {
   const [vehicleInfo, setvehicleInfo] = useState({});
   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...vehicleInfo };
      newInfo[field] = value;
      setvehicleInfo(newInfo);
   };

   const handleSubmit = (e) => {
      // collect data
      const vehicleData = {
         ...vehicleInfo,
      };
      // send to the server
      fetch("https://backend-elegent-server.onrender.com/vehicles", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(vehicleData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               swal(
                  "Ordered!",
                  "You have sucessfully ordered your plan!",
                  "success"
               );
               e.target.reset();
            }
         });

      e.preventDefault();
   };
   return (
      <Box>
         <Typography id="transition-modal-title" variant="h6" component="h2">
            Add a Vehicle
         </Typography>
         <form onSubmit={handleSubmit}>
            <p>
               <TextField
                  sx={{ width: "50%", m: 1 }}
                  id="outlined-size-small"
                  name="name"
                  onBlur={handleOnBlur}
                  defaultValue=""
                  size="small"
                  placeholder="Vehicle Name"
               />
            </p>
            <p>
               <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue=""
                  onBlur={handleOnBlur}
                  name="overview"
                  placeholder="Write your description here"
                  style={{ width: "50%", height: "100px" }}
                  required
               />
            </p>
            <p>
               {" "}
               <TextField
                  sx={{ width: "50%", m: 1 }}
                  id="outlined-size-small"
                  name="img"
                  onBlur={handleOnBlur}
                  defaultValue=""
                  placeholder="Your Phone"
                  size="small"
                  required
                  placeholder="Image Link"
               />
            </p>

            <p>
               <TextField
                  sx={{ width: "50%", m: 1 }}
                  id="outlined-size-small"
                  name="price"
                  onBlur={handleOnBlur}
                  defaultValue=""
                  placeholder="Price"
                  size="small"
                  required
               />
            </p>
            <Button type="submit" variant="contained">
               Submit
            </Button>
         </form>
      </Box>
   );
};

export default AddAVehicle;
