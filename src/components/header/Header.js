import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import Subheader from "../subheader/Subheader";
import StyledLink from "../utils/StyledLink";
import LoadingBar from "react-redux-loading-bar";
// import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
import { signOutAction, adminLoginAction } from "../../actions/loginAction";
import store from "../../store";
class Header extends React.Component {
  navlinks = () => {
    console.log(this.props.user_data);
    if (
      this.props.authenticated &&
      this.props.user_data.credential.is_student
    ) {
      return (
        <ul className="nav">
          <li className="nav__item">
            {(this.props.location.pathname === "/" && (
              <StyledLink to="/dashboard">
                {<button className="btn btn--white">dashboard</button>}
              </StyledLink>
            )) || (
              <StyledLink to="/">
                {<button className="btn btn--white">programs</button>}
              </StyledLink>
            )}
          </li>
          <li className="nav__item">
            {(this.props.location.pathname === "/" && (
              <StyledLink to="/help">
                <button className="btn btn--white">help</button>
              </StyledLink>
            )) || (
              <StyledLink to="/applied">
                <button
                  onClick={() => {
                    alert("Not implemented yet!");
                  }}
                  className="btn btn--white"
                >
                  notification
                </button>
              </StyledLink>
            )}
          </li>
          <li className="nav__item">
            {/* <StyledLink to="/logout"> */}
            <button
              onClick={() => this.props.signOutAction()}
              className="btn btn--colored"
            >
              Signout
            </button>
            {/* </StyledLink> */}
          </li>
        </ul>
      );
    } else if (
      this.props.authenticated &&
      this.props.user_data.credential.is_manager
    )
      return (
        <ul className="nav">
          <li className="nav__item">
            <StyledLink to="/dashboard">
              <button className="btn btn--white">Dashboard</button>
            </StyledLink>
          </li>
          <li className="nav__item">
            <StyledLink to="/Posts">
              <button className="btn btn--white">Add new</button>
            </StyledLink>
          </li>
          <li className="nav__item">
            <StyledLink to={this.props.pathname}>
              <button
                onClick={() => this.props.signOutAction()}
                className="btn btn--colored logout"
              >
                logout
              </button>
            </StyledLink>
          </li>
        </ul>
      );
    else if (
      this.props.authenticated &&
      this.props.user_data.credential.is_superuser
    )
      return (
        <ul className="nav">
          <li className="nav__item">
            <StyledLink to="/">
              <button
                onClick={() => {
                  this.props.adminLoginAction();
                }}
                className="btn btn--white"
              >
                Dashboard
              </button>
            </StyledLink>
          </li>
          <li className="nav__item">
            <StyledLink to="#">
              <button className="btn btn--white">Notification</button>
            </StyledLink>
          </li>
          <li className="nav__item">
            <StyledLink to="/logout">
              <button
                onClick={() => this.props.signOutAction()}
                className="btn btn--colored logout"
              >
                logout
              </button>
            </StyledLink>
          </li>
        </ul>
      );
    else
      return (
        <ul className="nav">
        <li className="nav__item">
            <StyledLink to="/about">
              <button className="btn btn--white">about</button>
            </StyledLink>
          </li>
        <li className="nav__item">
            <StyledLink to="/about">
              <button className="btn btn--white">search</button>
            </StyledLink>
          </li>
          
          {/* <li className="nav__item">
            <StyledLink to="/signup">
              <button className="btn btn--white">signup</button>
            </StyledLink>
          </li> */}
          <li className="nav__item">
            <StyledLink to="/login">
              <button className="btn btn--colored">sign in</button>
            </StyledLink>
          </li>
        </ul>
      );
  };
  render() {
    const visible =
      this.props.location.pathname !== "/" ||
      (this.props.authenticated && this.props.user_data.credential.is_manager);

    return (
      <div id="nav-wrap" className="nav-wrapper">
        <LoadingBar
          style={{
            position: "fixed",
            backgroundColor: "red",
            height: "3px"
          }}
        />
        {/* <ToastContainer /> */}
        <header
          style={{ padding: visible ? "" : "1em", transition: "all 700ms" }}
          id="header"
          className="header"
        >
          <h1 className="header__brand">
            <StyledLink to="/">
              <span>zelo</span>
              <span className="header__brand--grey">band</span>
              {this.props.authenticated &&
                this.props.user_data.credential.is_superuser && (
                  <span> admin </span>
                )}
            </StyledLink>
          </h1>
          {this.navlinks()}
        </header>
        <Subheader visible={visible} />
      </div>
    );
  }
}

Header.propTypes = {
  signOutAction: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  user_data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user_data: state.auth.user_data,
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
});
export default connect(
  mapStateToProps,
  { signOutAction, adminLoginAction }
)(Header);
