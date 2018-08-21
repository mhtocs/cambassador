import React from "react";
import "./Register.css";
import StyledLink from "../../utils/StyledLink";
class Register extends React.Component {
  render() {
    return (
      <div className="signup-block">
        <div className="signup-card">
          <h2 className="signup__title">Join for free</h2>

          <div className="signup-btn-grp">
            <StyledLink to="/register_manager">
              <button style={{}} className="signup__choose--btn">
                Signup as manager
              </button>
            </StyledLink>

            <StyledLink to="/register_student">
              <button style={{}} className="signup__choose--btn">
                Signup as student
              </button>
            </StyledLink>
          </div>
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
              Signin
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
