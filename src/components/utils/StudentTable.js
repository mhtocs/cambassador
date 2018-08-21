import React, { Component } from "react";
import "./Table.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
Moment.globalFormat = "D MMM YYYY";

export default class StudentTable extends Component {
  render() {
    return (
      <div className="table">
        <div className="row theader">
          <div className="cell">Applied on</div>
          <div className="cell">Title</div>
          <div className="cell">Company</div>
          <div className="cell">Applicants</div>
          <div className="cell">Status</div>
        </div>

        {this.props.programs.map(p => (
          <div id={p.id} key={p.id} className="row">
            <div className="cell" data-title="Date">
              <Moment unix>{p.date}</Moment>
            </div>
            <div className="cell" data-title="Title">
              {p.program.program_name} (
              <Link
                style={{ textDecoration: "none", color: "#0057ff" }}
                to="/apps"
              >
                View Application
              </Link>
              )
            </div>
            <div className="cell" data-title="Applications">
              {p.program.company_name}
            </div>
            <div className="cell" data-title="Applicants count">
              {p.program.applicants_count}
            </div>
            <div className="cell" data-title="Status">
              {(p.score && <span>Hired</span>) || <span>Pending</span>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
