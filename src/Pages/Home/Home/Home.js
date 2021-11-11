import React from "react";
import Banner from "../../Home/Banner/Banner";
import Navigation from "./../../Shared/Navigation/Navigation";
import Login from "./../../Login/Login/Login";

const Home = () => {
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <Login></Login>
      </div>
   );
};

export default Home;
