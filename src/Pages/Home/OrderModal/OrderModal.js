import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "./../../../hooks/useAuth";
import swal from "sweetalert";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const OrderModal = ({ openOrder, handleOrderClose, singleItem }) => {
   const { name, price } = singleItem;
   const { user } = useAuth();
   const initialInfo = {
      customerName: user.displayName,
      email: user.email,
      phone: "",
   };
   const [orderInfo, setOrderInfo] = useState(initialInfo);

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...orderInfo };
      newInfo[field] = value;
      setOrderInfo(newInfo);
   };

   const handleBookingSubmit = (e) => {
      // collect data
      const orderData = {
         ...orderInfo,
         vehicleName: name,
         vehiclePrice: price,
      };
      // send to the server
      fetch("https://obscure-refuge-59992.herokuapp.com/placeorder", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(orderData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               swal(
                  "Ordered!",
                  "You have sucessfully ordered your plan!",
                  "success"
               );
               handleOrderClose();
            }
         });

      e.preventDefault();
   };

   return (
      <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         open={openOrder}
         onClose={handleOrderClose}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <Fade in={openOrder}>
            <Box sx={style}>
               <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
               >
                  {name}
               </Typography>
               <form onSubmit={handleBookingSubmit}>
                  <p>
                     Name:
                     <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        name="customerName"
                        onBlur={handleOnBlur}
                        defaultValue={user?.displayName}
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
                     {" "}
                     Your Phone:
                     <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue=""
                        placeholder="Your Phone"
                        size="small"
                        required
                     />
                  </p>

                  <p>
                     Your Address:
                     <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        name="address"
                        onBlur={handleOnBlur}
                        defaultValue=""
                        placeholder="Your Address"
                        size="small"
                        required
                     />
                  </p>
                  <p>
                     Vehicle Name:
                     <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        name="vehicleName"
                        defaultValue={name}
                        size="small"
                     />
                  </p>
                  <p>
                     Vehicle Price:
                     <TextField
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        name="vehiclePrice"
                        placeorder="price"
                        defaultValue={price}
                        size="small"
                     />
                  </p>

                  {/* <TextField
                     disabled
                     sx={{ width: "90%", m: 1 }}
                     id="outlined-size-small"
                     defaultValue={date.toDateString()}
                     size="small"
                  /> */}
                  <Button type="submit" variant="contained">
                     Submit
                  </Button>
               </form>
            </Box>
         </Fade>
      </Modal>
   );
};

export default OrderModal;
