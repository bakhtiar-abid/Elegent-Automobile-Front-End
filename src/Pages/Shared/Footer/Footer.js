import {
   Container,
   Grid,
   IconButton,
   List,
   ListItemText,
   Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyle = makeStyles({
   socialIcon: {
      color: "white !important",
      border: "1px solid white !important",
      margin: "20px -150px 10px -150px !important",

      "&:hover": {
         background: "black !important",
         color: "#fff !important",
      },
   },
});
const Footer = () => {
   const { socialIcon } = useStyle();
   return (
      <footer style={{ backgroundColor: "#343434" }}>
         <Container>
            <Grid container spacing={3} sx={{ my: 3 }}>
               <Grid item xs={12} sm={12} md={6} lg={4}>
                  <List>
                     {/* <ListItemText sx={{ color: "white", mb: 1 }}>
                        Products
                     </ListItemText> */}
                     <Box>
                        {" "}
                        <h2 style={{ color: "white" }}>Products</h2>{" "}
                     </Box>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Used Cars for Sale
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Cheap Cars for Sale
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Elegent App
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Model Comparison
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Car Loan Calculator
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Car Lease Calculator
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        ElegentCar+
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Site Map
                     </ListItemText>
                  </List>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={4}>
                  <List>
                     <Box>
                        {" "}
                        <h2 style={{ color: "white" }}>Media</h2>{" "}
                     </Box>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Newsroom
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Investor Relations
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        ElegentCar Blog
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Tooth Extraction
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Developer Blog
                     </ListItemText>
                  </List>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={4}>
                  <List>
                     <Box>
                        {" "}
                        <h2 style={{ color: "white" }}>About Us</h2>{" "}
                     </Box>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Who We Are
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Our Team
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Careers
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        FAQs
                     </ListItemText>
                     <ListItemText sx={{ color: "white", mb: 1 }}>
                        Contact Us
                     </ListItemText>
                  </List>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={12}>
                  <IconButton className={socialIcon}>
                     <GoogleIcon />
                  </IconButton>
                  <IconButton className={socialIcon}>
                     <TwitterIcon />
                  </IconButton>
                  <IconButton className={socialIcon}>
                     <InstagramIcon />
                  </IconButton>
                  <IconButton className={socialIcon}>
                     <YouTubeIcon />
                  </IconButton>
               </Grid>
            </Grid>
            <Typography
               sx={{ textAlign: "center", py: 4, color: "white" }}
               variant="subtitle2"
            >
               Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </Typography>
         </Container>
      </footer>
   );
};

export default Footer;
