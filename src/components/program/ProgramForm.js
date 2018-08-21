import React, { Component } from "react";
import "./ProgramForm.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { applyProgramAction } from "../../actions/dataActions";
import { Redirect } from "react-router-dom";
class ProgramForm extends Component {
  submit = values => {
    this.props.applyProgramAction(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className="info-red">{this.props.errorMessage}</div>;
    }
  }

  isEmpty = obj => {
    return Object.keys(obj).length === 0;
  };

  render() {
    if (this.props.location.state === undefined)
      return <Redirect to={`/apply/${this.props.match.params.id}`} />;
    const { d } = this.props.location.state;
    const { questions } = d;
    // console.log(`console.log : ${questions}`);
    const { handleSubmit } = this.props;
    return (
      <div className="program__apply-block">
        <div className="program__apply-card">
          <h2 className="program__apply-title">Please Fill !</h2>
          <form
            className="program__apply-input-grp"
            onSubmit={handleSubmit(this.submit)}
          >
            {(!this.isEmpty(questions) &&
              questions.reverse().map((q, i) => {
                return (
                  <div key={q.id}>
                    <label style={{ fontSize: "20px", fontWeight: "400" }}>
                      Q{i + 1}: {q.text}
                    </label>
                    <div>
                      <Field
                        component="textarea"
                        className="program__apply-ctrl"
                        placeholder="Minimum 300 words ..."
                        width="100%"
                        height="90px"
                        name={"input" + q.id}
                      />
                    </div>
                  </div>
                );
              })) || (
              <div>
                <span
                  style={{ fontSize: "20px", fontWeight: "600" }}
                  className="program__apply-ctrl info-red"
                >
                  No questions found
                </span>
              </div>
            )}

            <button type="submit" style={{}} className="program__apply-submit">
              Apply
            </button>
          </form>
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
const reduxApplyProgramForm = reduxForm({
  form: "apply_program"
})(ProgramForm);

export default connect(
  mapStateToProps,
  { applyProgramAction }
)(reduxApplyProgramForm);
