import {
   Container,
   Typography,
   TextField,
   Button,
   CircularProgress,
   Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const { signInWithGoogle, isLoading, loginUser, user, authError } =
      useAuth();

   const location = useLocation();
   const history = useHistory();

   const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
   };
   const handleLoginSubmit = (e) => {
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
   };

   const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
   };
   return (
      <Container
         sx={{
            boxShadow: 3,
            margin: "100px",
            padding: "50px",
         }}
      >
         <Grid
            container
            spacing={2}
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
               <Typography variant="body1" gutterBottom>
                  Login
               </Typography>
               <form onSubmit={handleLoginSubmit}>
                  <TextField
                     sx={{ width: "75%", m: 1 }}
                     id="standard-basic"
                     label="Your Email"
                     name="email"
                     onChange={handleOnChange}
                     variant="standard"
                  />
                  <TextField
                     sx={{ width: "75%", m: 1 }}
                     id="standard-basic"
                     label="Your Password"
                     type="password"
                     name="password"
                     onChange={handleOnChange}
                     variant="standard"
                  />

                  <Button
                     sx={{ width: "75%", m: 1 }}
                     type="submit"
                     variant="contained"
                  >
                     Login
                  </Button>
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                     <Button variant="text">New User? Please Register</Button>
                  </NavLink>
                  {isLoading && <CircularProgress />}
                  {user?.email && (
                     <Alert severity="success">Login successfully!</Alert>
                  )}
                  {authError && <Alert severity="error">{authError}</Alert>}
               </form>
               <br />
               <Button onClick={handleGoogleSignIn} variant="contained">
                  <GoogleIcon style={{ marginRight: "px" }}></GoogleIcon> Google
                  Sign In
               </Button>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Login;
