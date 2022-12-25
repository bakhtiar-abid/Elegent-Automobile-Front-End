import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "./../../../hooks/useAuth";
const ManageAllOrders = () => {
   const { token } = useAuth();
   const [orders, setOrders] = useState([]);
   const [control, setConrol] = useState(false);

   useEffect(() => {
      const url = `https://elegent-automobile-backend.vercel.app/placeorder/`;
      fetch(url, {
         headers: {
            authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => setOrders(data));
   }, [control]);

   const handleUpdate = (id) => {
      const url = `https://elegent-automobile-backend.vercel.app/placeorder/${id}`;

      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         // body: JSON.stringify("approved"),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               setConrol(!control);
               swal("Approved!", "You have sucessfully approved!", "success");
            } else {
               setConrol(false);
            }
         });
   };

   const handleDelete = (id) => {
      swal({
         title: "Are you sure?",
         text: "Once cancelled, you will not be able to recover this selected file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            fetch(
               `https://elegent-automobile-backend.vercel.app/deleorder/${id}`,
               {
                  method: "DELETE",
                  headers: {
                     authorization: `Bearer ${token}`,
                     "content-type": "application/json",
                  },
               }
            )
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount) {
                     setConrol(!control);
                     swal("Poof! Your selected file has been cancelled", {
                        icon: "success",
                     });
                  } else {
                     setConrol(false);
                  }
               });
         } else {
            swal("Your selected file is safe!");
         }
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
                     <TableCell align="right">Status</TableCell>
                     <TableCell align="right">Action</TableCell>
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
                        <TableCell align="right"> {row.status}</TableCell>
                        <TableCell align="right">
                           <Button
                              onClick={() => handleUpdate(row?._id)}
                              variant="contained"
                           >
                              Update
                           </Button>
                        </TableCell>
                        <TableCell align="right">
                           <Button
                              onClick={() => handleDelete(row?._id)}
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

export default ManageAllOrders;
