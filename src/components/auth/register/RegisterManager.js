import React from "react";
import "./Register.css";
import StyledLink from "../../utils/StyledLink";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerManagerAction } from "../../../actions/registerAction";
class RegisterManager extends React.Component {
  submit = values => {
    this.props.registerManagerAction(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className="info-red">{this.props.errorMessage}</div>;
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="signup-block">
        <div className="signup-card">
          <h2 className="signup__title">Sign up</h2>
          {/* {this.errorMessage()} */}
          <form
            onSubmit={handleSubmit(this.submit)}
            className="signup-input-grp"
          >
            <div>
              <Field
                name="firstname"
                component="input"
                className="signup-ctrl"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                component="input"
                className="signup-ctrl"
                type="text"
                name="company"
                placeholder="Company name"
              />
            </div>
            <div>
              <Field
                component="input"
                className="signup-ctrl"
                type="number"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div>
              <Field
                component="input"
                className="signup-ctrl"
                type="text"
                name="email"
                placeholder="Work email"
              />
            </div>
            <div>
              <Field
                component="input"
                className="signup-ctrl"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <button type="submit" style={{}} className="manager__signup--btn">
              Signup
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
          <div className="signin--block">
            Already have a account?
            <StyledLink
              to="/login"
              style={{
                color: "#00f",
                display: "inline",
                margin: "0 20px",
                height: "",

                textDecoration: "underline"
              }}
            >
              Sign in
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  successMessage: state.auth.reg_success,
  errorMessage: state.auth.reg_error
});

// export default RegisterManager;
const reduxFormRegisterManager = reduxForm({
  form: "register_manager"
})(RegisterManager);

export default connect(
  mapStateToProps,
  { registerManagerAction }
)(reduxFormRegisterManager);
