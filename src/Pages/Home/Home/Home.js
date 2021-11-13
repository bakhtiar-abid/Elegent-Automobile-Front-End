import React from "react";
import Banner from "../../Home/Banner/Banner";
import Vehicles from "./../Vehicles/Vehicles";
import Register from "./../../Login/Register/Register";
import Navigation from "./../../Shared/Navigation/Navigation";
import Reviews from "./../Reviews/Reviews";
import VolvoCar from "./../VolvoCar/VolvoCar";

const Home = () => {
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <Vehicles></Vehicles>
         <Reviews></Reviews>
         <VolvoCar></VolvoCar>
      </div>
   );
};

export default Home;
