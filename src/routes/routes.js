import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Register from '../pages/Register/index';
import RegisterIC from '../pages/Register/Icecream'
import Admin from '../pages/Admin';
import Sale from '../pages/Sale';
import List from "../pages/List";
import Home from '../pages/Home'
import ListIC from '../pages/List/Icecream';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/sale" component={Sale}/>
        <Route path="/registeric" component={RegisterIC}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/listic" component={ListIC}/>
        <Route path="/list" component={List}/>
      </Switch>
    </BrowserRouter>
  );
}
