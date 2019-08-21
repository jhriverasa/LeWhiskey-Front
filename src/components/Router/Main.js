import React from "react";
import { Switch, Route } from "react-router-dom";

import Invoice from "../Views/Invoice/Invoice"


const Main = () => (

    <Switch>
      
      <Route exact path="/invoice" component={Invoice} />
    </Switch>

);
export default Main;