import React, { Component } from "react";
import Table from "../utils/Table";
import PropTypes from "prop-types";
import { fetchPrograms } from "../../actions/dataActions";
import { connect } from "react-redux";
import { ALL_PROGRAMS_URL } from "../../constants/urls";
class ManagerDashboard extends Component {
  componentWillMount() {
    if (!this.props.initial_fetch) {
      this.props.fetchPrograms(
        `${ALL_PROGRAMS_URL}?posted_by=${this.props.user_data.credential.id}`
      );
    }
  }

  render() {
    // console.log(this.props.programs);
    const disabled = this.props.loading === 1 ? true : false;
    console.log("Disabled:", disabled);
    return (
      <div className="dashboard">
        <h1 className="title">Programs</h1>
        <Table programs={this.props.programs} />
        {(this.props.programs.length > 0 && (
          <div className="load-more1">
            {(this.props.url && (
              <button
                onClick={() => this.props.fetchPrograms(this.props.url)}
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

ManagerDashboard.propTypes = {
  fetchPrograms: PropTypes.func.isRequired,
  programs: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  initial_fetch: PropTypes.bool.isRequired,
  loading: PropTypes.number
};

const mapStateToProps = state => ({
  programs: state.data.programs,
  url: state.data.url,
  initial_fetch: state.data.initial_fetch,
  user_data: state.auth.user_data,
  authenticated: state.auth.authenticated,
  loading: state.loadingBar.default
});

export default connect(
  mapStateToProps,
  { fetchPrograms }
)(ManagerDashboard);
