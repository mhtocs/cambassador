import React, { Component } from "react";
import StyledLink from "../utils/StyledLink";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleProgram } from "../../actions/dataActions";
import Moment from "react-moment";
import { SINGLE_PROGRAM_URL } from "../../constants/urls";
Moment.globalFormat = "D MMM YYYY";

class ProgramDetailed extends Component {
  componentDidMount() {
    console.log("component mounted");
    const token =
      this.props.authenticated && this.props.user_data
        ? this.props.user_data.jwt.token
        : "";
    this.props.fetchSingleProgram(
      `${SINGLE_PROGRAM_URL}${this.props.match.params.id}/`,
      token
    );
  }

  isEmpty = obj => {
    return Object.keys(obj).length === 0;
  };
  render() {
    console.log(this.props.match.params.id);
    const d = this.props.tmp_program;
    console.log("Programs: ", d);
    if (!this.isEmpty(d))
      return (
        <div className="main">
          <div className="program__detail-card card">
            <span className="logo-span">
              <img
                alt="P"
                className="program-logo"
                src="https://logo.clearbit.com/slack.com"
              />
            </span>
            <span className="detailed_text">
              <div className="program-card__header">
                <span className="program-card__header--vert">
                  <h3 className="program__title">{d.program_name}</h3>
                  <h5> Posted by : {d.posted_by}</h5>
                </span>
                <span className="program-card__header--horiz" />
              </div>
              <div className="program-card__body">
                <h4 className="program-card__body--title">Summary</h4>
                <p className="program-card__body--summary">
                  {d.program_summary}
                </p>
              </div>
              <div className="program-card__body">
                <h4 className="program-card__body--title">Description</h4>
                <p className="program-card__body--summary">
                  {d.program_summary}
                </p>
              </div>

              <div className="program-card__body">
                <h4 className="program-card__body--title">Responsibility</h4>
                <p className="program-card__body--summary">
                  {d.program_summary}
                </p>
              </div>
              <div className="program-card__body">
                <h4 className="program-card__body--title">Perks</h4>
                <p className="program-card__body--summary">{d.program_perks}</p>
              </div>

              <div className="program-card__footer">
                <span>
                  <h5>
                    Deadline: <Moment unix>{d.application_deadline}</Moment>
                  </h5>
                </span>
                <span>
                  <h5>
                    Posted on: <Moment unix>{d.posted_on}</Moment>
                  </h5>
                </span>
              </div>
              <StyledLink
                to={{
                  pathname: "/apply_now/" + d.id,
                  state: { d: d }
                }}
              >
                <button className="program__apply--btn detailed_btn">
                  Apply Now
                </button>
              </StyledLink>
            </span>
          </div>
        </div>
      );
    return null;
  }
}

ProgramDetailed.propTypes = {
  fetchSingleProgram: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  tmp_program: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user_data: state.auth.user_data,
  tmp_program: state.data.tmp_program
});

export default connect(
  mapStateToProps,
  { fetchSingleProgram }
)(ProgramDetailed);
