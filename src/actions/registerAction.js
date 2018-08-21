import axios from "axios";
import {
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS
} from "../constants/action-types";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { REGISTER_MANAGER_URL, REGISTER_STUDENT_URL } from "../constants/urls";
import { notify } from "../components/utils/Notify";

export const registerManagerAction = (
  { firstname, company, phone, email, password },
  history
) => dispatch => {
  dispatch(showLoading());
  axios
    .post(`${REGISTER_MANAGER_URL}`, {
      firstname,
      company,
      phone,
      email,
      password
    })
    .then(res => {
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: "Registration succesfull"
      });
      history.push({
        pathname: "/login"
      });
      notify("SUCCESS", "Registration Succesfull");
    })
    .catch(error => {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: {
          message: error.response.data.message,
          type: "manager"
        }
      });
      notify("ERROR", error.response.data.message);
      console.log(error.response);
    })
    .finally(() => {
      dispatch(hideLoading());
    });
};

export const registerStudentAction = (
  { firstname, lastname, email, password, pincode },
  history
) => dispatch => {
  dispatch(showLoading());
  axios
    .post(`${REGISTER_STUDENT_URL}`, {
      firstname,
      lastname,
      email,
      password,
      pincode
    })
    .then(res => {
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: "Registration succesfull"
      });
      notify("SUCCESS", "Registration Succesfull");
      history.push({
        pathname: "/login"
      });
    })
    .catch(error => {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: {
          message: error.response.data.message,
          type: "student"
        }
      });
      console.log(error.response);
      notify("ERROR", error.response.data.message);
    })
    .finally(() => {
      dispatch(hideLoading());
    });
};
