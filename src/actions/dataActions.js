import {
  FETCH_PROGRAMS,
  FETCH_CATEGORIES,
  FETCH_SINGLE_PROGRAM,
  FETCH_APPLIED_PROGRAMS,
  HOME_URL,
  APPLICATION_ERROR,
  APPLICATION_SUCCESS
} from "../constants/action-types";

import { showLoading, hideLoading } from "react-redux-loading-bar";
import axios from "axios";
import { ALL_CATEGORIES_URL, ALL_PROGRAMS_URL, APPLICATION_PROGRAMS_URL } from "../constants/urls";

import { push } from "connected-react-router";

export const fetchPrograms = (url = ALL_PROGRAMS_URL) => dispatch => {
  dispatch(showLoading());
  axios
    .get(url)
    // .then(x => new Promise(resolve => setTimeout(() => resolve(x), 7000)))
    .then(res => {
      dispatch({
        type: FETCH_PROGRAMS,
        payload: res.data
      });
    })
    .catch(error => {
      alert(error);
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

export const fetchSingleProgram = (url, token) => dispatch => {
  dispatch(showLoading());
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => {
      dispatch({
        type: FETCH_SINGLE_PROGRAM,
        payload: res.data
      });
      // console.log(res.data);
      // return res.data;
    })
    .catch(error => {
      console.log(error.response);
      if (error.response.status=="401"){
        // alert(`Server response:${error.response.data.detail}, Please login`);
        // alert("401 happened")
        dispatch(push("/login/"));
      }
      else alert(error);
      
      // window.location.href = HOME_URL;
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

export const fetchAppliedPrograms = (url, token) => dispatch => {
  dispatch(showLoading());
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    // .then(x => new Promise(resolve => setTimeout(() => resolve(x), 7000)))
    .then(res => {
      dispatch({
        type: FETCH_APPLIED_PROGRAMS,
        payload: res.data
      });
    })
    .catch(error => {
      alert(error);
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

export const fetchCategories = () => dispatch => {
  axios
    .get(ALL_CATEGORIES_URL)
    .then(res => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data
      });
      console.log("category", res.data);
    })
    .catch(error => {
      alert(error);
    });
};


export const applyProgramAction = (
  { a1,a2,a3 },
  history
) => dispatch => {
  dispatch(showLoading());
  axios
    .post(`${APPLICATION_PROGRAMS_URL}`, {
      a1,
      a2,
      a3,
    })
    .then(res => {
      dispatch({
        type: APPLICATION_SUCCESS,
        payload: "Application succesfull"
      });
      history.push({
        pathname: "/"
      });
    })
    .catch(error => {
      dispatch({
        type: APPLICATION_ERROR,
        payload: {
          message: error.response.data.message,
          type: "student"
        }
      });
      console.log(error.response);
    })
    .finally(() => {
      dispatch(hideLoading());
    });
};