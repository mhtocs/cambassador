import React, { Component } from "react";
import ManagerDashboard from "./ManagerDashboard";
import StudentDashboard from "./StudentDashboard";
import "./Dashboard.css";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { notify } from "../utils/Notify";

class Dashboard extends Component {
  render() {
    if (this.props.authenticated)
      if (this.props.user_data.credential.is_superuser)
        return <Redirect to="/" />;
      else if (this.props.user_data.credential.is_manager)
        return <ManagerDashboard />;
      else return <StudentDashboard />;
    else {
      // notify("INFO", "Please login to continue...");
      return <Redirect to="/login/" />;
    }
  }
}

Dashboard.propTypes = {
  // fetchPrograms: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  user_data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user_data: state.auth.user_data,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Dashboard);
