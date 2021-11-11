import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Explore from "./Pages/Home/Explore/Explore";

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
                  <Route exact path="/explore">
                     <Explore></Explore>
                  </Route>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>
                  {/* <Route path="/register">
                     <Register />
                  </Route> */}
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
