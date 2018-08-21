import axios from "axios";
import { push } from "connected-react-router";

import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  UNAUTHENTICATED,
  CLEAR_DATA,
  FETCH_PROGRAMS
} from "../constants/action-types";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { LOGIN_URL, adminURL } from "../constants/urls";
import { fetchPrograms } from "./dataActions";
// import { notify } from "../components/utils/Notify";

// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'Authorization': 'Bearer '+token}
// });

export const loginAction = ({ email, password }, history) => dispatch => {
  dispatch(showLoading());
  axios
    .post(`${LOGIN_URL}`, { email, password })
    .then(res => {
      dispatch({ type: CLEAR_DATA });
      localStorage.setItem("user__data", JSON.stringify(res.data));
      dispatch({ type: AUTHENTICATED, payload: res.data });

      console.log(res.data.jwt.token);
      // if (res.data.credential.is_superuser)
      //   return window.location.assign("http://localhost:8000/admin/");
      // history.push({
      //   pathname: "/dashboard/"
      //   // state: res.data.credential
      // });
    })
    .catch(error => {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: error.response.data.message
      });
      // notify("ERROR", error.response.data.message);
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

export const signOutAction = () => dispatch => {
  dispatch(showLoading());
  dispatch({
    type: UNAUTHENTICATED
  });
  dispatch({
    type: CLEAR_DATA
  });
  dispatch(hideLoading());
  // dispatch(push("/"));
};

export const adminLoginAction = () => dispatch => {
  console.log("admin");
  window.location.assign(adminURL);
};
