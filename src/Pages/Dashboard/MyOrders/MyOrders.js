import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "./../../../hooks/useAuth";
import Button from "@mui/material/Button";

const MyOrders = () => {
   const { user, token } = useAuth();
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      const url = `https://obscure-refuge-59992.herokuapp.com/placeorder/${user?.email}`;
      fetch(url, {
         headers: {
            authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => setOrders(data));
   }, [user?.email, token]);

   const handleDeleteOrder = (id) => {
      const url = `https://obscure-refuge-59992.herokuapp.com/placeorder/${id}`;
      fetch(url, {
         method: "DELETE",
         headers: {
            authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setOrders(orders.filter((order) => order._id !== id));
         });
   };

   return (
      <div>
         <h2>Orders: {orders?.length}</h2>
         <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
               <TableHead>
                  <TableRow>
                     <TableCell align="right">No</TableCell>
                     <TableCell align="right">Customer Name</TableCell>
                     <TableCell align="right">Email</TableCell>
                     <TableCell align="right">Phone</TableCell>
                     <TableCell align="right">Address</TableCell>
                     <TableCell align="right">Vehicle Name</TableCell>
                     <TableCell align="right">Vehicle Price</TableCell>
                     <TableCell align="right">Action</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {orders?.map((row, index) => (
                     <TableRow
                        key={row._id}
                        sx={{
                           "&:last-child td, &:last-child th": { border: 0 },
                        }}
                     >
                        <TableCell align="right">{index + 1}</TableCell>
                        <TableCell align="right">{row.customerName}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.vehicleName}</TableCell>
                        <TableCell align="right">
                           $ {row.vehiclePrice}
                        </TableCell>
                        <TableCell align="right">
                           <Button
                              onClick={() => handleDeleteOrder(orders?._id)}
                              variant="contained"
                           >
                              Cancel
                           </Button>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default MyOrders;
