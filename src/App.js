import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import MoreVehicles from "./Pages/Home/MoreVehicles/MoreVehicles";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import SingleVehicle from "./Pages/Home/SingleVehicle/SingleVehicle";
import Register from "./Pages/Login/Register/Register";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Navigation></Navigation>
               <Switch>
                  {/* <PrivateRoute path="/appointment">
                     <Appointment />
                  </PrivateRoute> */}
                  {/* <PrivateRoute path="/dashboard">
                     <Dashboard />
                  </PrivateRoute> */}
                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <Route exact path="/moreVehicles">
                     <MoreVehicles></MoreVehicles>
                  </Route>
                  <PrivateRoute exact path="/vehicle/:Id">
                     <SingleVehicle></SingleVehicle>
                  </PrivateRoute>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>

                  <Route exact path="/register">
                     <Register></Register>
                  </Route>
                  <Route exact path="/">
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
