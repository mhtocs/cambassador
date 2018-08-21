import React from "react";
import "./Register.css";
import StyledLink from "../../utils/StyledLink";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerStudentAction } from "../../../actions/registerAction";

class RegisterStudent extends React.Component {
  state = {
    msg: "Sign up",
    inputs: [
      {
        id: 3,
        type: "text",
        name: "firstname",
        placeholder: "First name",
        done: false
      },
      {
        id: 4,
        type: "text",
        name: "lastname",
        placeholder: "Last name",
        done: false
      },
      {
        id: 1,
        type: "text",
        name: "email",
        placeholder: "Email",
        done: false
      },
      {
        id: 2,
        type: "password",
        name: "password",
        placeholder: "Password",
        done: false
      },

      {
        id: 5,
        type: "text",
        name: "pincode",
        placeholder: "Pincode",
        done: false
      }
    ]
  };

  submit = values => {
    this.props.registerStudentAction(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className="info-red">{this.props.errorMessage}</div>;
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { selectedOption } = this.state;
    return (
      <div className="signup-block">
        <div className="signup-card">
          <h2 className="signup__title">{this.state.msg}</h2>
          {/* {this.errorMessage()} */}
          <form
            className="signup-input-grp"
            onSubmit={handleSubmit(this.submit)}
          >
            {this.state.inputs.map(i => (
              <div key={i.id}>
                <Field
                  component="input"
                  className="signup-ctrl"
                  type={i.type}
                  placeholder={i.placeholder}
                  name={i.name}
                />
                {(i.done = true)}
              </div>
            ))}

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
const reduxFormRegisterStudent = reduxForm({
  form: "register_student"
})(RegisterStudent);

export default connect(
  mapStateToProps,
  { registerStudentAction }
)(reduxFormRegisterStudent);
