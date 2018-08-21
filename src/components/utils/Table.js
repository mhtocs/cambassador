import React, { Component } from "react";
import "./Table.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
Moment.globalFormat = "D MMM YYYY";

export default class Table extends Component {
  render() {
    return (
      <div className="table">
        <div className="row theader">
          <div className="cell">Date</div>
          <div className="cell">Title</div>
          <div className="cell">Applications</div>
          <div className="cell">Deadline</div>
        </div>

        {this.props.programs.map(p => (
          <div key={p.id} className="row">
            <div className="cell" data-title="Date">
              <Moment unix>{p.posted_on}</Moment>
            </div>
            <div className="cell" data-title="Title">
              {p.program_name} (
              <Link
                style={{ textDecoration: "none", color: "#0057ff" }}
                to="/apps"
              >
                View
              </Link>
              )
            </div>
            <div className="cell" data-title="Applications">
              {p.applicants_count} (
              <Link style={{ textDecoration: "none", color: "#0057ff" }} to="/">
                View Applications
              </Link>
              )
            </div>
            <div className="cell" data-title="Deadline">
              <Moment unix>{p.application_deadline}</Moment>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
