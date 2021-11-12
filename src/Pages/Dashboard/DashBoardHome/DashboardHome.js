import * as React from "react";
import Grid from "@mui/material/Grid";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
   const [date, setDate] = React.useState(new Date());
   return (
      <Grid container spacing={2}>
         <Grid item xs={12} sm={5}>
            <Calendar date={date} setDate={setDate}></Calendar>
         </Grid>
         <Grid item xs={12} sm={7}>
            <Appointments date={date}></Appointments>
         </Grid>
      </Grid>
   );
};

export default DashboardHome;

<Box style={{ marginTop: "100px" }}>
   <Link style={{ textDecoration: "none" }} to={`${url}`}>
      <Button color="inherit">Dashboard</Button>
   </Link>
   <br />
   <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
      <Button color="inherit">Pay</Button>
   </Link>
   <br />
   <Link style={{ textDecoration: "none" }} to={`${url}/myorders`}>
      <Button color="inherit">My Orders</Button>
   </Link>
   <br />
   <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
      <Button color="inherit">Review</Button>
   </Link>
   <br />

   <Link style={{ textDecoration: "none" }} to={`${url}`}>
      <Button onClick={logout} color="inherit">
         Logout
      </Button>
   </Link>
</Box>;
