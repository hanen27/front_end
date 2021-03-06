import App from "./App.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Demandes from "./screen/Admin/DemandeScreen/Demandes";
import Dashboard from "./screen/Admin/DashboardScreen/Dashboard";
import Login from "./screen/loginScreen/login";
import AddUser from './screen/Admin/AddUseScreen/AddUser'
import SideBar from "./utils/SideBar";
import adminRoutes from "./Routes/AdminRoutes";
import LoginRoute from "./Routes/LoginRoute";
import Employee from "./screen/EmployeeScreen/Employee";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AddDemande from "./screen/EmployeeScreen/AddDemande.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*  { adminRoutes.forEach(element => {
  <Route path={element.path}  render={(props) => <element.component {...props} /> } />
})} */}

      <Route path="/admin"  render={(props) => <Dashboard {...props} />} />
      
   
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/Employee" render={(props) => <Employee {...props} />} />

      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  // <App />,

  document.getElementById("root")
);
