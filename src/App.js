import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               {/* <PrivateRoute path="/appointment">
                     <Appointment />
                  </PrivateRoute> */}
               {/* <PrivateRoute path="/dashboard">
                     <Dashboard />
                  </PrivateRoute> */}
               <Route path="/">
                  <Home></Home>
               </Route>
               {/* <Route path="/login">
                     <Login />
                  </Route> */}
               {/* <Route path="/register">
                     <Register />
                  </Route> */}
               {/* <Route exact path="/">
                     <Home />
                  </Route> */}
            </Switch>
         </Router>
      </div>
   );
}

export default App;
