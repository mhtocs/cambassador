import React, { Component } from "react";
import StudentTable from "../utils/StudentTable";
import PropTypes from "prop-types";
import { fetchAppliedPrograms } from "../../actions/dataActions";
import { connect } from "react-redux";
import { APPLIED_PROGRAMS_URL } from "../../constants/urls";
class StudentDashboard extends Component {
  componentWillMount() {
    if (!this.props.applied_initial_fetch) {
      this.props.fetchAppliedPrograms(
        `${APPLIED_PROGRAMS_URL}`,
        this.props.user_data.jwt.token
      );
    }
  }

  render() {
    // console.log(this.props.programs);
    const disabled = this.props.loading === 1 ? true : false;
    console.log("Disabled:", disabled);
    return (
      <div className="dashboard">
        <h1 className="title">My Applications</h1>
        <StudentTable programs={this.props.applied_programs} />
        {(this.props.applied_programs.length > 0 && (
          <div className="load-more1">
            {(this.props.applied_url && (
              <button
                onClick={() =>
                  this.props.fetchAppliedPrograms(
                    this.props.url,
                    this.props.user_data.jwt.token
                  )
                }
                className="program__load--btn"
                disabled={disabled}
              >
                Load more
              </button>
            )) || <div className="program--msg">-X- That's All -X-</div>}
          </div>
        )) || <div className="program--msg">No data returned</div>}
      </div>
    );
  }
}

StudentDashboard.propTypes = {
  fetchAppliedPrograms: PropTypes.func.isRequired,
  applied_programs: PropTypes.array.isRequired,
  url: PropTypes.string,
  applied_initial_fetch: PropTypes.bool.isRequired,
  loading: PropTypes.number
};

const mapStateToProps = state => ({
  applied_programs: state.data.applied_programs,
  applied_url: state.data.applied_url,
  applied_initial_fetch: state.data.initial_fetch,
  user_data: state.auth.user_data,
  authenticated: state.auth.authenticated,
  loading: state.loadingBar.default
});

export default connect(
  mapStateToProps,
  { fetchAppliedPrograms }
)(StudentDashboard);
