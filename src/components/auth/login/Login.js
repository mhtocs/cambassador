import React from "react";
import "./Login.css";
import StyledLink from "../../utils/StyledLink";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginAction } from "../../../actions/loginAction";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  submit = values => {
    // console.log(values);
    this.props.loginAction(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className="info-red">{this.props.errorMessage}</div>;
    }
  }

  render() {
    const { handleSubmit } = this.props;
    if (this.props.authenticated) return <Redirect to="/dashboard" />;

    return (
      <div className="login-block">
        <div className="login-card">
          <h1 className="login__title">Log in</h1>

          <form
            onSubmit={handleSubmit(this.submit)}
            className="login-input-grp"
            autocomplete="off"
          >
            <div>
              <Field
                component="input"
                className="login-ctrl"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <Field
                component="input"
                className="login-ctrl"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <StyledLink
              to="/reset"
              style={{
                color: "#00f",
                display: "inline",
                fontSize:"13px",
                textAlign:"left"
              }}
              
            >
              Forgot your password ?
            </StyledLink>
            
            <button type="submit" style={{}} className="login__choose--btn">
              Log in
            </button>
            <div className="member"><input type="checkbox" /> <span style={{paddingLeft:"5px"}}>Remember me</span> </div>
            <div class="strike">
              <div class="line"></div>
              <div class="text">or</div>
            </div>

            <button onClick={()=>{alert("Not implemented")}} type="button" style={{}} className="login__fb--btn">
              Log in with Facebook
            </button>
          </form>
          {this.errorMessage()}
          <div className="signin--block">
            Don't have account?
            <StyledLink
              to="/signup"
              style={{
                color: "#00f",
                display: "inline",
                margin: "0 20px",
                height: "",

                textDecoration: "underline"
              }}
            >
              Sign up
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  authenticated: state.auth.authenticated,
  user_data: state.auth.user_data
});

const reduxFormLogin = reduxForm({
  form: "login"
})(Login);

export default connect(
  mapStateToProps,
  { loginAction }
)(reduxFormLogin);
