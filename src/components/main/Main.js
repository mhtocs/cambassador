import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPrograms } from "../../actions/dataActions";
import "./Main.css";
import Program from "../program/Program";
import { ALL_PROGRAMS_URL } from "../../constants/urls";
import Spinner from "../utils/Spinner";
import { Redirect } from "react-router-dom";

class Main extends React.Component {
  componentDidMount() {
    if (!this.props.initial_fetch) {
      this.props.fetchPrograms(ALL_PROGRAMS_URL);
    }
  }

  render() {
    if (this.props.authenticated && this.props.user_data.credential.is_manager)
      return <Redirect to="/dashboard" />;
    const programs = this.props.programs.map(p => <Program key={p.id} d={p} />);
    if (programs.length > 0) {
      return (
        <div className="main">
          {programs}
          <div className="load-more">
            {(this.props.url && (
              <button
                onClick={() => this.props.fetchPrograms(this.props.url)}
                className="program__load--btn"
              >
                Load more
              </button>
            )) || <div className="program--msg">-X- That's All -X-</div>}
          </div>
        </div>
      );
    }

    return (
      <div className="main">
        {/* <div className="program-card card">
          <div className="loading__center">Loading</div>
        </div> */}
        <div className="program-card card">
          <Spinner />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  fetchPrograms: PropTypes.func.isRequired,
  programs: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  initial_fetch: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  programs: state.data.programs,
  url: state.data.url,
  initial_fetch: state.data.initial_fetch,
  user_data: state.auth.user_data,
  authenticated: state.auth.authenticated
});

export default connect(
  mapStateToProps,
  { fetchPrograms }
)(Main);
