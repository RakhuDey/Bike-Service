import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Service from "./components/Services/Service/Service";
import Review from "./components/Services/Review/Review";
import AddServices from "./components/Services/AddServices/AddServices";
import CheckOut from "./components/Services/CheckOut/CheckOut";
import ManageService from "./components/Admin/MangeService/MangeService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Order from "./components/Services/Order/Order";
import AddReview from "./components/Services/AddReview/AddReview";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/mangeServices">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
