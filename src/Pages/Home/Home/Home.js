import React from "react";
import Banner from "../../Home/Banner/Banner";
import Vehicles from "./../Vehicles/Vehicles";
import Register from "./../../Login/Register/Register";
import Navigation from "./../../Shared/Navigation/Navigation";
import Reviews from "./../Reviews/Reviews";
import VolvoCar from "./../VolvoCar/VolvoCar";
import MakeAdmin from "./../../Dashboard/MakeAdmin/MakeAdmin";

const Home = () => {
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <Vehicles></Vehicles>
         <Reviews></Reviews>
         <VolvoCar></VolvoCar>
         <MakeAdmin></MakeAdmin>
      </div>
   );
};

export default Home;
