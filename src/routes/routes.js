import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import GA from "../pages/gestion-adherant";
import GS from "../pages/gestion-structures";
import GF from "../pages/gestion-financiere";
import GAA from "../pages/gestion-activites";
import Profile from "../pages/profile";
import EditModal from "../components/edit-modal";
import AdherantHistory from "../pages/adherant-history";
import StructerHistory from "../pages/structer-history";
import StructerEditModal from "../components/edit-modal-structure";

const routing = () => (
  <div>
    <Switch>
      <Route exact path="/connexion" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/gestion-des-adherants" component={GA} />
      <Route path="/member/update" component={EditModal} />
      <Route path="/member/history" component={AdherantHistory} />
      <Route path="/structer/history" component={StructerHistory} />
      <Route path="/structer/update" component={StructerEditModal} />
      <Route path="/gestion-des-structures" component={GS} />
      <Route path="/gestion-financieres" component={GF} />
      <Route path="/gestion-des-activites" component={GAA} />
      <Route path="/profile" component={Profile} />
      {/* <Route path="/deconnexion" component={Login} /> */}
    </Switch>
  </div>
);
export default routing;
