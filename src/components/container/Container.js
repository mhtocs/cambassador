import React from "react";
import { Route } from "react-router-dom";
import "./Container.css";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import RegisterManager from "../auth/register/RegisterManager";
import RegisterStudent from "../auth/register/RegisterStudent";
import Dashboard from "../dashboard/Dashboard";
import ProgramDetailed from "../program/ProgramDetailed";
import ProgramForm from "../program/ProgramForm";
const Container = () => (
  <React.Fragment>
    <Route
      exact
      path="/"
      render={props => (
        <div id="cont" className="container">
          <Sidebar />
          <Main />
        </div>
      )}
    />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Register} />
    <Route exact path="/register_manager" component={RegisterManager} />
    <Route exact path="/register_student" component={RegisterStudent} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/apply/:id" component={ProgramDetailed} />
    <Route exact path="/apply_now/:id" component={ProgramForm} />
        
  </React.Fragment>
);

export default Container;
