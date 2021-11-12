import React from "react";
import Banner from "../../Home/Banner/Banner";
import Vehicles from "./../Vehicles/Vehicles";
import Register from "./../../Login/Register/Register";
import Navigation from "./../../Shared/Navigation/Navigation";

const Home = () => {
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <Vehicles></Vehicles>
      </div>
   );
};

export default Home;
